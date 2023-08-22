import type { Editor } from "tinymce";

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
        return content
    }

    // Returns content with pages included
    getContent(editor: Editor = this.editor): string {
        const body = editor.getBody();
        return body.innerHTML
    }
}

export const GlobalMethods = new GlobalMethodsClass()