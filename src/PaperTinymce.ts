import type { Editor } from 'tinymce';
import '@/services/dependencies'
import App from './App.svelte'



export const PaperTinymce = (selector: string): Editor => {
    let editor: Editor;
    const app = new App({
        target: document.querySelector(selector),
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