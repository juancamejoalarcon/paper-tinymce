import type { Editor } from "tinymce";
import { copyEventListener } from "./CopyHandler";

import {
  DefaultMargins,
  A4Dimensions,
  rulerWidthNumberOfPoints,
  rulerHeightNumberOfPoints,
} from "@/core/dimensions";

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

  // Root element
  root: HTMLElement; // pagesEl
  pagesContainer: HTMLDivElement;
  allPages: HTMLDivElement[] = [];
  currentPage = 1;

  currentMargins = DefaultMargins;
  widthPoint = A4Dimensions.widthInPixes / rulerWidthNumberOfPoints;
  heightPoint = A4Dimensions.heightInPixels / rulerHeightNumberOfPoints;
  currentZoom = 0;

  constructor() {}

  start(editor: Editor) {
    this.editor = editor;
    setTimeout(() => this.setEvents(), 0);
    this.doubleUpdate()
  }

  setEvents() {
    this.editor.on("Undo Redo ViewUpdate", this.build);

    this.editor.on("keyup", (e) => {
      if (e.keyCode === 91 || e.keyCode === 17) return;
      this.build();
    });

    this.editor.on("SetContent", () => {
      this.resetToBeforeInitalState();
      this.build();
      this.applyZoom(this.currentZoom);
    });

    this.editor.on("SelectionChange", () => {
      this.setCurrentPage();
      this.editor.dispatch("currentPageUpdate", {
        currentPage: this.currentPage,
      });
    });

    this.editor.contentWindow.addEventListener("paste", () => {
      setTimeout(() => this.build(), 200);
    });

    copyEventListener(this.editor);

    this.editor.on("zoom-updated", ({ zoom }) => this.applyZoom(zoom));
    this.editor.on("margins-changed", (event) => {
      this.setCurrentMargins(event.margins);
      // I do it twice because there are no pages on init and it needs to resize after creating the pages
      this.doubleUpdate()
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

  setInitialState(): void {
    this.body = this.editor.getBody() as HTMLBodyElement;
    this.doc = this.editor.contentDocument;

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

  getAllNodesInEditor(): ChildNode[] {
    const nodes: ChildNode[] = [];
    if (!this.inited) {
      this.setInitialState();
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
      const heightOfNode = getOuterHeightOfElement(node as HTMLElement);
      const newHeight = acumulatedHeight + heightOfNode;
      if (newHeight > heightOfPage) {
        this.buildPage(currentPage, nodesToInsertInPage);
        acumulatedHeight = heightOfNode;
        currentPage += 1;
        nodesToInsertInPage = [node];
        if (index === nodes.length - 1 && this.inited) {
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
        box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
        margin: 20px auto;
        overflow: auto;
        background: white;
        display: flex;
        flex-direction: column;
        background-color: white;
      `;
    return wrapper;
  }

  setMarginsOfPage(page: HTMLDivElement) {
    page.style.marginLeft = this.widthPoint * this.currentMargins.left + "px";
    page.style.marginRight = this.widthPoint * this.currentMargins.right + "px";
    page.style.marginTop = this.heightPoint * this.currentMargins.top + "px";
  }

  getMarginTopAndBottomOfPage(): number {
    return (
      this.heightPoint * this.currentMargins.bottom +
      this.heightPoint * this.currentMargins.top
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
        if (newPage !== this.currentPage) this.currentPage = newPage;
      }
    }
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

  setCurrentMargins(margins: any) {
    this.currentMargins = margins;
  }
}

export const Pages = new PagesClass();
