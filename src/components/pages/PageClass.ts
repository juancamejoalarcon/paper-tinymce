import type { Editor } from "tinymce";

import {
  A4Dimensions,
  DefaultMargins,
  getOuterHeightOfElement,
  rulerWidthNumberOfPoints,
  rulerHeightNumberOfPoints,
} from "../../plugin/core/shared/utils";

class Pages {
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
  currentZoom = 0

  constructor() {}

  build(editor: Editor) {
    const savedSelection = this.getCurentSelectorLocation(editor);

    this.updateSavedPagesAndPageContainers();

    const nodes = this.getAllNodesInEditor(editor);
    this.distributeNodesOnPages(nodes);
    this.orderPages();
    this.hideEmptyPages();

    this.inited = true;
    // Reapply selection
    editor.selection.setCursorLocation(
      savedSelection.node,
      savedSelection.offset
    );
  }

  setInitialState(editor: Editor): void {
    this.body = editor.getBody() as HTMLBodyElement;
    this.doc = editor.contentDocument;

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
    this.inited = false
    this.allPages = []
  }

  getCurentSelectorLocation(editor: Editor): { node: Node; offset: number } {
    return {
      node: editor.selection.getRng().commonAncestorContainer,
      offset: editor.selection.getRng().startOffset,
    };
  }

  getAllNodesInEditor(editor: Editor): ChildNode[] {
    const nodes: ChildNode[] = [];
    if (!this.inited) {
      this.setInitialState(editor);
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

  setCurrentPage(editor: Editor): void {
    if (this.inited) {
      const selectedNode = editor.selection.getNode();
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
      const zoomAbsolute = Math.abs(zoom) * 100
      this.root.style.left = (zoomAbsolute / 2) + '%'
      this.root.style.position = 'relative'
    } else {
      this.root.style.left = '0'
    }
    this.root.style.transform = `scale(${1 + zoom})`;
    this.currentZoom = zoom

  }

  setCurrentMargins(margins: any) {
    this.currentMargins = margins
  }

}

export default new Pages()
