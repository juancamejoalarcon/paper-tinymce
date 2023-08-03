import type { Editor } from "tinymce";
import { Throttler } from "@ephox/katamari";

import * as Events from "../../api/Events";
import type { PagesApi } from "../../api/Api";
import {
  A4Dimensions,
  DefaultMargins,
  getOuterHeightOfElement,
} from "../shared/utils";

let currentMargins = DefaultMargins;
let currentPage = 1;
let inited = false;
const rulerWidthNumberOfPoints = 66;
const rulerHeightNumberOfPoints = 66;
const widthPoint = A4Dimensions.widthInPixes / rulerWidthNumberOfPoints;
const heightPoint = A4Dimensions.heightInPixels / rulerHeightNumberOfPoints;
const pageClass = "paper-page";

let body: HTMLElement;
let doc: Document;
let editor: Editor;

let pagesContainer: HTMLDivElement;
let pagesEl: HTMLDivElement;
let allPages: HTMLDivElement[] = [];

export const pagesCounter = (): number => {
  return allPages.reduce(
    (accumulator, page) =>
      accumulator + (page.firstElementChild.childNodes.length ? 1 : 0),
    0
  );
};

const setInitialState = (editor: Editor): void => {
  body = editor.getBody();
  doc = editor.contentDocument;
  editor = editor;

  pagesEl = doc.createElement("div");
  pagesEl.classList.add("pages");
  pagesEl.id = "paper-tinymce-pages";

  const pagesContainerEl = doc.createElement("div");
  pagesContainerEl.classList.add("pages-container");

  pagesEl.appendChild(pagesContainerEl);
  pagesContainer = pagesContainerEl;

  body.appendChild(pagesEl);
};

const resetToInitalState = (): void => {
  inited = false;
  allPages = [];
};

const getAllNodesInEditor = (editor: Editor): ChildNode[] => {
  const nodes: ChildNode[] = [];
  if (!inited) {
    setInitialState(editor);
    body.childNodes.forEach((node: ChildNode) => {
      if (node.constructor.name === "Comment") return;
      if ((node as HTMLElement)?.id === "paper-tinymce-pages") return;
      nodes.push(node);
    });
  } else {
    allPages.forEach((page: Element) => {
      const pageContent = page.firstElementChild;
      nodes.push(...(pageContent.childNodes as any));
    });
  }
  return nodes;
};

const distributeNodesOnPages = (nodes: ChildNode[]): void => {
  let acumulatedHeight = 0;
  let currentPage = 1;
  const marginTopAndBottom =
    heightPoint * currentMargins.bottom + heightPoint * currentMargins.top;
  const heightOfPage = A4Dimensions.heightInPixels - marginTopAndBottom;
  let nodesToInsertInPage = [];
  nodes.forEach((node: any, index: number) => {
    const heightOfNode = getOuterHeightOfElement(node as HTMLElement);
    const newHeight = acumulatedHeight + heightOfNode;
    if (newHeight > heightOfPage) {
      buildPage(currentPage, nodesToInsertInPage);
      acumulatedHeight = heightOfNode;
      currentPage += 1;
      nodesToInsertInPage = [node];
      if (index === nodes.length - 1 && inited) {
        buildPage(currentPage, nodesToInsertInPage);
      }
    } else {
      acumulatedHeight = newHeight;
      nodesToInsertInPage.push(node);
      if (index === nodes.length - 1) {
        buildPage(currentPage, nodesToInsertInPage);
      }
    }
  });
};

const buildPage = (
  pageNumber: number,
  nodesToInsertInPage: ChildNode[],
  lastPage = false
): void => {
  const id = "page-" + pageNumber;
  const pageEl = doc.getElementById(id);
  let wrapper: HTMLElement;
  if (pageEl) {
    wrapper = pageEl;
  } else {
    wrapper = createEmptyDivWrapper(pageNumber);
    pagesContainer.appendChild(wrapper);
  }
  wrapper.firstElementChild.append(...nodesToInsertInPage);
  setMarginsOfPage(wrapper.firstElementChild);
};

const setMarginsOfPage = (page: any): void => {
  page.style.marginLeft = widthPoint * currentMargins.left + "px";
  page.style.marginRight = widthPoint * currentMargins.right + "px";
  page.style.marginTop = heightPoint * currentMargins.top + "px";
};

const createEmptyDivWrapper = (pageNumber: number): HTMLElement => {
  const wrapper = doc.createElement("article");
  wrapper.innerHTML = "<section></section>";
  wrapper.setAttribute("data-page-number", pageNumber.toString());
  wrapper.id = "page-" + pageNumber;
  wrapper.classList.add(pageClass);
  wrapper.style.cssText = `
    height: ${A4Dimensions.height}; 
    width: ${A4Dimensions.width};
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    margin: 20px auto;
    overflow: auto;
    background: white;
    display: flex;
    flex-direction: column;
    background-color: white;
  `;

  allPages.push(wrapper);

  return wrapper;
};

const hideEmptyPages = (editor: Editor): void => {
  allPages.forEach((page: any) => {
    if (!page.firstElementChild.childNodes.length) page.style.display = "none";
    else page.style.display = "block";
  });
};

const orderPages = (): void => {
  allPages = [].slice.call(allPages).sort((elA: Element, elB: Element) => {
    const a = parseInt(elA.getAttribute("data-page-number") || "0", 10);
    const b = parseInt(elB.getAttribute("data-page-number") || "0", 10);

    return a - b;
  });
  allPages.forEach((el: Element) => {
    pagesContainer.appendChild(el);
  });
};

const setPagesInEditor = (editor: Editor): void => {
  // Save selection to reapply
  const nodeBeforePaging = editor.selection.getRng().commonAncestorContainer;
  const offset = editor.selection.getRng().startOffset;

  updateContainers();

  const nodes: ChildNode[] = getAllNodesInEditor(editor);

  distributeNodesOnPages(nodes);
  orderPages();
  hideEmptyPages(editor);

  inited = true;
  // Reapply selectione
  editor.selection.setCursorLocation(nodeBeforePaging, offset);
};

const updateContainers = (): void => {
  if (inited) {
    allPages = [...(doc.querySelectorAll(`.${pageClass}`) as any)];
    pagesContainer = doc.querySelector(".pages-container");
  }
};

const setCurrentPage = (editor: Editor) => {
  if (inited) {
    const selectedNode = editor.selection.getNode();
    const pageElement = selectedNode.closest(`.${pageClass}`);
    if (pageElement) {
      const newPage = Number(pageElement.getAttribute("data-page-number"));
      if (newPage !== currentPage) {
        currentPage = newPage;
        Events.fireCurrentPageUpdate(editor, currentPage);
      }
    }
  }
};

const setPages = (editor: Editor, api: PagesApi): void => {
  Events.firePagesUpdate(editor, api);
};

const doubleUpdate = (editor: Editor, api: PagesApi) => {
  // I do it twice because there are no pages on init and it needs to resize after creating the pages
  setPages(editor, api);
  setTimeout(() => setPages(editor, api), 200);
};

const zoomListener = (editor: Editor) => {
  editor.on("zoomUpdate", ({ zoom }) => {
    pagesEl.style.transformOrigin = "0 0";
    pagesEl.style.transform = `scale(${1 + zoom})`;
  });
};

const rulerListener = (editor: Editor, api: PagesApi) => {
  editor.on("marginRulerUpdate", (event) => {
    currentMargins = event.margins;
    doubleUpdate(editor, api);
  });
};

const copyEventListener = (editor: Editor) => {
  editor.contentWindow.addEventListener('copy', (event) => {
    // Remove all the unnecesary html tags (pages) from the copied text
    let text = event.clipboardData.getData('text/html')
    let newText = ''
    text.replace(/<article(.*?)>([\s\S]*?)<\/article>/g, (match, $1) => {
      let extractedText = match.replace(/<article(.*?)>/g, '')
      extractedText = extractedText.replace(/<\/article>/g, '')
      extractedText = extractedText.replace(/<section(.*?)>/g, '')
      extractedText = extractedText.replace(/<\/section>/g, '')
      newText += extractedText
      return match
    })
    event.clipboardData.setData("text/html", newText);
  });
}

const setup = (editor: Editor, api: PagesApi, delay: number): void => {
  const debouncedUpdate = Throttler.first(() => setPages(editor, api), delay);

  editor.on("init", () => {
    setTimeout(() => {
      doubleUpdate(editor, api);

      editor.on("Undo Redo ViewUpdate", debouncedUpdate.throttle);
      editor.on("keyup", (e) => {
        // 91 is the command key on mac (cmd) and 17 is the control key on windows (ctrl)
        // should not update on those keys
        if (e.keyCode === 91 || e.keyCode === 17) return;
        debouncedUpdate.throttle();
      });

      editor.on("SetContent", () => {
        resetToInitalState();
        debouncedUpdate.throttle();
      });

      editor.on("SelectionChange", () => setCurrentPage(editor));

      editor.contentWindow.addEventListener("paste", () => {
        setTimeout(() => debouncedUpdate.throttle(), 200);
      });

      copyEventListener(editor)

      zoomListener(editor);
      rulerListener(editor, api);
    }, delay);
    editor.on("remove", debouncedUpdate.cancel);
  });
};

export { setup, setPages, setPagesInEditor };
