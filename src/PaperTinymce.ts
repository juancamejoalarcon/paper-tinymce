import type { Editor } from "tinymce";
import "@/services/dependencies";
import { store } from "@/core/store";
import App from "./App.svelte";
import { getPaperTinymceEditor } from "@/core/paper-instance"
import type { PaperTinymceEditor  } from "@/core/paper-instance"

export const PaperTinymce = (selector: string, options: any = {}): PaperTinymceEditor  => {
  let editor: Editor;
  const shadowEL = store.createShadowRootContainer(selector);
  new App({
    target: shadowEL,
    props: {
      setEditor: (ed: Editor) => editor = ed,
      options,
    },
  });
  return getPaperTinymceEditor(editor, shadowEL);
};

const exportToModuleLoaders = (PaperTinymce) => {
  if (typeof module === "object") {
    try {
      module.exports = PaperTinymce;
    } catch (_) {}
  }
};
const exportToWindowGlobal = (PaperTinymce) => ((window as any).PaperTinymce = PaperTinymce);

exportToWindowGlobal(PaperTinymce);
exportToModuleLoaders(PaperTinymce);
