import type { Editor } from "tinymce";

class PaperTinymceClass {
    editor: Editor = null;

    start (editor: Editor) {
        this.editor = editor
    }
    
    // Returns content without pages
    getCleanContent(): string {
        const body = this.editor.getBody();
        let content = ''
        body.querySelectorAll('.paper-page').forEach((page: HTMLElement) => {
            content += page.firstElementChild.innerHTML
        })
        return content
    }

    // Returns content with pages included
    getContent(): string {
        const body = this.editor.getBody();
        return body.innerHTML
    }
}

export const PaperTinymce = new PaperTinymceClass()