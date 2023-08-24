import type { Editor } from "tinymce";
import type { Margins } from "./dimensions";
import { DefaultMargins } from "./dimensions";

class Store {

  rootContainerEl: ShadowRoot | null = null;
  editor: Editor;
  currentMargins = { ...DefaultMargins };
  currentZoom: number = 0;
  currentPage = 1;

  setEditor(editor: Editor) {
    this.editor = editor;
  }

  setRootContainerEl(el: ShadowRoot) {
    this.rootContainerEl = el
  }

  updateGlobalMargins(margins: Margins) {
    this.editor.dispatch("global-margins-changed", { margins });
  }

  updateMargins(margins: Margins) {
    this.currentMargins = margins;
    this.editor.dispatch("margins-changed", { margins });
  }

  updateZoom(zoom: number) {
    this.currentZoom = zoom;
    this.editor.dispatch("zoom-updated", { zoom });
  }

  getCurrentMargins(): Margins {
    return this.currentMargins;
  }

  setCurrentPage(pageNumber: number) {
    this.currentPage = pageNumber;
    this.editor.dispatch("current-page-updated", {
      currentPage: this.currentPage,
    });
  }

  createShadowRootContainer(selector: string): ShadowRoot {
    const shadowEL = document.querySelector(selector).attachShadow({ mode: "open" });
    this.setRootContainerEl(shadowEL);
    const div = document.createElement("div");
    div.id = "paper-editor-container";
    this.rootContainerEl.appendChild(div);
    return this.rootContainerEl
  }
}

export const store = new Store();
