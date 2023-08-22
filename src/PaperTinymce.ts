import type { Editor } from "tinymce";
import "@/services/dependencies";
import { store } from "@/core/store";
import { GlobalMethods } from "@/core/editor-global-methods"
import App from "./App.svelte";

export const PaperTinymce = (selector: string): Editor => {
  let editor: Editor;
  const shadowEL = document
    .querySelector(selector)
    .attachShadow({ mode: "open" });
  store.setRootContainerEl(shadowEL);
  const div = document.createElement("div");
  div.id = "paper-editor-container";
  store.rootContainerEl.appendChild(div);
  const app = new App({
    target: shadowEL,
    props: {
      setEditor: (ed: Editor) => {
        editor = ed;
      },
    },
  });

  // extend editor
  (editor as any).paperTinymce = {
    store,
    shadowEL,
    getContent: GlobalMethods.getContent,
    getCleanContent: GlobalMethods.getCleanContent
  }
  return editor;
};

const exportToModuleLoaders = (PaperTinymce) => {
  if (typeof module === "object") {
    try {
      module.exports = PaperTinymce;
    } catch (_) {}
  }
};
const exportToWindowGlobal = (PaperTinymce) =>
  ((window as any).PaperTinymce = PaperTinymce);

exportToWindowGlobal(PaperTinymce);
exportToModuleLoaders(PaperTinymce);
