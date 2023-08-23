import type { Editor } from "tinymce";
import "@/services/dependencies";
import { store } from "@/core/store";
import { GlobalMethods } from "@/core/editor-global-methods";
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
    getCleanContent: GlobalMethods.getCleanContent,
    setPaperContent: (content: string) => {
      const info = content.match(/(?<=\<papertinymceinfo>)([^;]*)(?=\<\/papertinymceinfo>)/g);
      if (info && info[0]) {
        const paperInfo = JSON.parse(info[0])
        if (paperInfo?.pgMar) store.updateGlobalMargins(paperInfo?.pgMar)
      }

      const newContent = content.replace(/<papertinymceinfo>([^;]*)<\/papertinymceinfo>/g, "");

      editor.dispatch("reset-pages");
      editor.setContent(newContent);
    },
  };
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
