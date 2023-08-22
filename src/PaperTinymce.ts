import type { Editor } from 'tinymce';
import '@/services/dependencies'
import { store } from "@/core/store" 
import App from './App.svelte'



export const PaperTinymce = (selector: string): Editor => {
    let editor: Editor;
    const shadowOpen = document.querySelector(selector).attachShadow({ mode: "open" });
    store.setRootContainerEl(shadowOpen);
    const div = document.createElement("div");
    div.id = 'paper-editor-container';
    store.rootContainerEl.appendChild(div);
    const app = new App({
        target: shadowOpen,
        props: {
            setEditor: (ed: Editor) => {
                editor = ed
            }
        }
    })
    return editor
}

const exportToModuleLoaders = (PaperTinymce) => {
    if (typeof module === "object") {
      try {
        module.exports = PaperTinymce;
      } catch (_) {}
    }
  };
  const exportToWindowGlobal = (PaperTinymce) => (window as any).PaperTinymce = PaperTinymce;

  exportToWindowGlobal(PaperTinymce);
  exportToModuleLoaders(PaperTinymce);