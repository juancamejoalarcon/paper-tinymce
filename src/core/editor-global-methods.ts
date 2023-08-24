import type { Editor } from "tinymce";
import { store } from "@/core/store";

class GlobalMethodsClass {
  editor: Editor = null;

  start(editor: Editor) {
    this.editor = editor;
  }

  // Returns content without pages
  getCleanContent(editor: Editor = this.editor): string {
    const body = editor.getBody();
    let content = "";
    body.querySelectorAll(".paper-page").forEach((page: HTMLElement) => {
      content += page.firstElementChild.innerHTML;
    });

    const data = { pgMar: store.getCurrentMargins() };
    const papertinymceInfo = `<papertinymceinfo>${JSON.stringify(
      data
    )}</papertinymceinfo>`;
    return papertinymceInfo + content;
  }

  // Returns content with pages included
  getContent(editor: Editor = this.editor): string {
    const body = editor.getBody();

    return body.innerHTML;
  }
// Returns content with pages included and global info
  getPaperContent(editor: Editor = this.editor): string {
    const body = editor.getBody();

    const data = { pgMar: store.getCurrentMargins() };
    const papertinymceInfo = `<papertinymceinfo>${JSON.stringify(
      data
    )}</papertinymceinfo>`;
    
    return papertinymceInfo + editor.getContent();
  }

  setPaperContent(content: string, editor = this.editor) {
    const info = content.match(
      /(?<=\<papertinymceinfo>)([^;]*)(?=\<\/papertinymceinfo>)/g
    );
    if (info && info[0]) {
      const paperInfo = JSON.parse(info[0]);
      if (paperInfo?.pgMar) store.updateGlobalMargins(paperInfo?.pgMar);
    }

    const newContent = content.replace(
      /<papertinymceinfo>([^;]*)<\/papertinymceinfo>/g,
      ""
    );

    editor.dispatch("reset-pages");
    editor.setContent(newContent);
  }
}

export const GlobalMethods = new GlobalMethodsClass();
