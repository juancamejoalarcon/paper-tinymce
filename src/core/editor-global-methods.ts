import type { Editor } from "tinymce";
import { store } from "@/core/store"


class GlobalMethodsClass {
    editor: Editor = null;

    start (editor: Editor) {
        this.editor = editor
    }
    
    // Returns content without pages
    getCleanContent(editor: Editor = this.editor): string {
        const body = editor.getBody();
        let content = ''
        body.querySelectorAll('.paper-page').forEach((page: HTMLElement) => {
            content += page.firstElementChild.innerHTML
        })

        const data = { pgMar: store.getCurrentMargins() }
        const papertinymceInfo = `<papertinymceinfo>${JSON.stringify(data)}</papertinymceinfo>`
        return papertinymceInfo + content
    }

    // Returns content with pages included
    getContent(editor: Editor = this.editor): string {
        const body = editor.getBody();
        return body.innerHTML
    }
}

export const GlobalMethods = new GlobalMethodsClass()