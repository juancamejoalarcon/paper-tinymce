import type { Editor } from "tinymce";
import { copyEventListener } from "./CopyHandler";

import {
  A4Dimensions,
  widthPoint,
  heightPoint
} from "@/core/dimensions";
import { store } from '@/core/store'

import { getOuterHeightOfElement } from "@/services/utils/size";

class PagesClass {
  editor: Editor = null;
  inited = false;
  styleClasses = {
    root: "pages",
    page: "paper-page",
    pagesContainer: "pages-container",
  };
  rootId = "paper-tinymce-pages";

  // Body and document of iframe
  body: HTMLBodyElement;
  doc: Document;
  win: Window = window

  // Root element
  root: HTMLElement; // pagesEl
  pagesContainer: HTMLDivElement;
  allPages: HTMLDivElement[] = [];
  currentPage = 1;

  widthPoint = widthPoint;
  heightPoint = heightPoint;
  currentZoom = 0;

  constructor() {}

  start(editor: Editor) {
    this.editor = editor;
    setTimeout(() => this.setEvents(), 0);
    this.doubleUpdate()
  }

  setEvents() {
    this.editor.on("Undo Redo ViewUpdate", this.build);

    this.editor.on("keydown", (e) => {
      if (e.keyCode === 91 || e.keyCode === 17) return;
      if (e.ctrlKey || e.metaKey) return;

      const firstPage = this.body.querySelector('#page-1');
      if (!firstPage) this.resetToBeforeInitalState()
      this.build();
    });


    this.editor.on("refresh-pages", () => this.build())
    
    this.editor.on("reset-pages", () => this.resetToBeforeInitalState())

    this.editor.on("SetContent", () => {
      this.setInitialState()
      this.build();
      this.applyZoom(this.currentZoom);
    });

    this.editor.on("SelectionChange", () => {
      this.setCurrentPage();
      store.setCurrentPage(this.currentPage)
    });

    this.editor.contentWindow.addEventListener("paste", () => {
      setTimeout(() => this.build(), 200);
    });

    copyEventListener(this.editor);

    this.editor.on("zoom-updated", ({ zoom }) => this.applyZoom(zoom));
    this.editor.on("margins-changed", (event) => {
      this.build()
    });
  }

  doubleUpdate() {
    // I do it twice because there are no pages on init and it needs to resize after creating the pages
    setTimeout(() => this.build(), 10);
    setTimeout(() => this.build(), 200);
  }

  build() {
    setTimeout(() => {
      const savedSelection = this.getCurentSelectorLocation();

      this.updateSavedPagesAndPageContainers();

      const nodes = this.getAllNodesInEditor();
      this.distributeNodesOnPages(nodes);
      this.orderPages();
      this.hideEmptyPages();

      this.inited = true;
      // Reapply selection
      this.editor.selection.setCursorLocation(
        savedSelection.node,
        savedSelection.offset
      );
      this.editor.dispatch('pagesUpdate', {});
    }, 0);
  }

  setInitialState(body: HTMLBodyElement = null, doc: Document = null): void {
    this.body = body || this.editor.getBody() as HTMLBodyElement;
    this.doc = doc || this.editor.contentDocument;

    // Build root
    if (!this.doc.getElementById(this.rootId)) {
      this.root = this.doc.createElement("main");
      this.root.classList.add(this.styleClasses.root);
      this.root.id = this.rootId;

      const pagesContainerEl = this.doc.createElement("div");
      pagesContainerEl.classList.add(this.styleClasses.pagesContainer);

      this.root.appendChild(pagesContainerEl);
      this.pagesContainer = pagesContainerEl;

      this.body.appendChild(this.root);
    } else {
      this.root = this.doc.getElementById(this.rootId);
      this.pagesContainer = this.root.querySelector('.' + this.styleClasses.pagesContainer);
    }
  }

  resetToBeforeInitalState(): void {
    this.inited = false;
    this.allPages = [];
  }

  getCurentSelectorLocation(): { node: Node; offset: number } {
    return {
      node: this.editor.selection.getRng().commonAncestorContainer,
      offset: this.editor.selection.getRng().startOffset,
    };
  }

  getAllNodesInEditor(body: HTMLBodyElement = null, doc: Document = null): ChildNode[] {
    const nodes: ChildNode[] = [];
    if (!this.inited) {
      this.setInitialState(body, doc);
      this.body.childNodes.forEach((node: ChildNode) => {
        if (node.constructor.name === "Comment") return;
        if ((node as HTMLElement)?.id === this.rootId) return;
        // FIXME se debería ignorar también el pagesContainer
        nodes.push(node);
      });
    } else {
      this.allPages.forEach((page: Element) => {
        const pageContent = page.firstElementChild;
        nodes.push(...(pageContent.childNodes as any));
      });
    }
    return nodes;
  }

  distributeNodesOnPages(nodes: ChildNode[]): void {
    const heightOfPage = this.getHeightOfPage();

    let acumulatedHeight = 0;
    let currentPage = 1;
    let nodesToInsertInPage = [];

    nodes.forEach((node: ChildNode, index: number) => {
      const heightOfNode = getOuterHeightOfElement(node as HTMLElement, this.win);
      const newHeight = acumulatedHeight + heightOfNode;
      if (newHeight > heightOfPage) {
        this.buildPage(currentPage, nodesToInsertInPage);
        acumulatedHeight = heightOfNode;
        currentPage += 1;
        nodesToInsertInPage = [node];
        if (index === nodes.length - 1) {
          this.buildPage(currentPage, nodesToInsertInPage);
        }
      } else {
        acumulatedHeight = newHeight;
        nodesToInsertInPage.push(node);
        if (index === nodes.length - 1) {
          this.buildPage(currentPage, nodesToInsertInPage);
        }
      }
    });
  }

  buildPage(pageNumber: number, nodesToInsertInPage: ChildNode[]): void {
    const id = "page-" + pageNumber;
    let pageEl: HTMLElement = this.doc.getElementById(id);
    if (!pageEl) {
      pageEl = this.createPageContainer(pageNumber);
      this.pagesContainer.appendChild(pageEl);
      this.allPages.push(pageEl as HTMLDivElement);
    }
    pageEl.firstElementChild.append(...nodesToInsertInPage);
    this.setMarginsOfPage(pageEl.firstElementChild as HTMLDivElement);
  }

  createPageContainer(pageNumber: number): HTMLElement {
    const wrapper = this.doc.createElement("article");
    wrapper.innerHTML = "<section></section>";
    wrapper.setAttribute("data-page-number", pageNumber.toString());
    wrapper.id = "page-" + pageNumber;
    wrapper.classList.add(this.styleClasses.page);
    wrapper.style.cssText = `
        height: ${A4Dimensions.height}; 
        width: ${A4Dimensions.width};
      `;
    return wrapper;
  }

  setMarginsOfPage(page: HTMLDivElement) {
    const currentMargins = store.getCurrentMargins()
    page.style.marginLeft = this.widthPoint * currentMargins.left + "px";
    page.style.marginRight = this.widthPoint * currentMargins.right + "px";
    page.style.marginTop = this.heightPoint * currentMargins.top + "px";
  }

  getMarginTopAndBottomOfPage(): number {
    const currentMargins = store.getCurrentMargins()
    return (
      this.heightPoint * currentMargins.bottom +
      this.heightPoint * currentMargins.top
    );
  }

  getHeightOfPage(): number {
    return A4Dimensions.heightInPixels - this.getMarginTopAndBottomOfPage();
  }

  orderPages(): void {
    this.allPages = [].slice
      .call(this.allPages)
      .sort((elA: Element, elB: Element) => {
        const a = parseInt(elA.getAttribute("data-page-number") || "0", 10);
        const b = parseInt(elB.getAttribute("data-page-number") || "0", 10);

        return a - b;
      });
    this.allPages.forEach((el: Element) => this.pagesContainer.appendChild(el));
  }

  hideEmptyPages(): void {
    this.allPages.forEach((page: HTMLDivElement) => {
      if (!page.firstElementChild.childNodes.length)
        page.style.display = "none";
      else page.style.display = "block";
    });
  }

  setCurrentPage(): void {
    if (this.inited) {
      const selectedNode = this.editor.selection.getNode();
      const pageElement = selectedNode.closest(`.${this.styleClasses.page}`);
      if (pageElement) {
        const newPage = Number(pageElement.getAttribute("data-page-number"));
        if (newPage !== this.currentPage) {
          this.currentPage = newPage;
        }
      }
    }
  }

  getFirstPage(): HTMLElement | null {
    return this.root?.querySelector('#page-1')
  }

  getNumberOfPages(): number {
    return this.allPages.reduce(
      (accumulator, page) =>
        accumulator + (page.firstElementChild.childNodes.length ? 1 : 0),
      0
    );
  }

  updateSavedPagesAndPageContainers(): void {
    if (this.inited) {
      this.allPages = [
        ...(this.doc.querySelectorAll(`.${this.styleClasses.page}`) as any),
      ];
      this.pagesContainer = this.doc.querySelector(
        `.${this.styleClasses.pagesContainer}`
      );
    }
  }

  applyZoom(zoom: number) {
    this.root.style.transformOrigin = "0 0";
    if (zoom < 0) {
      const zoomAbsolute = Math.abs(zoom) * 100;
      this.root.style.left = zoomAbsolute / 2 + "%";
      this.root.style.position = "relative";
    } else {
      this.root.style.left = "0";
    }
    this.root.style.transform = `scale(${1 + zoom})`;
    this.currentZoom = zoom;
  }

}

export const Pages = new PagesClass();
