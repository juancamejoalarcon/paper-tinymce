// Returns the main object that is going to be exported
import type { Editor } from "tinymce";
import { store } from "@/core/store";
import { GlobalMethods } from "@/core/editor-global-methods";

export type PaperTinymceEditor = Editor & {
  paperTinymce: {
    store: any;
    shadowEL: ShadowRoot;
    getContent: Function;
    getCleanContent: Function;
    setPaperContent: Function;
    getPaperContent: Function;
  };
};

export const getPaperTinymceEditor = (
  editor: Editor,
  shadowEL: ShadowRoot
): PaperTinymceEditor => {
  const paperTinymceEditor = editor as PaperTinymceEditor;
  paperTinymceEditor.paperTinymce = {
    store,
    shadowEL,
    getContent: () => GlobalMethods.getContent(editor),
    getCleanContent: () => GlobalMethods.getCleanContent(editor),
    getPaperContent: (content: string) => GlobalMethods.getPaperContent(editor),
    setPaperContent: (content: string) => GlobalMethods.setPaperContent(content, editor),
  };
  return paperTinymceEditor;
};
