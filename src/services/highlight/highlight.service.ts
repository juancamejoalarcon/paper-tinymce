import type { Editor } from "tinymce"
import { Throttler } from "@ephox/katamari";
import { PaperTinymce } from "@/core/editor-global-methods";

class HighlightClass {

    editor: Editor

    start(editor: Editor) {
        this.editor = editor
        this.setEvents()
    }

    setEvents() {
        const debouncedHighlight = Throttler.first(() => this.highlight(), 200);
        this.editor.on('keyup', () => {
            debouncedHighlight.throttle()
        });
    }

    highlight() {
        const bookmark = this.editor.selection.getBookmark(2, true);
        let content = PaperTinymce.getContent();
        // Hghlight Logic
        content = content.replace(/(?<!<mark>){%([^}]+)%}/g, '<mark>{%$1%}</mark>');
        // Highlight IDs
        content = content.replace(/(?<!<mark>){{([^}]+)}}/g, '<mark>{{$1}}</mark>');
        
        this.editor.setContent(content);
        this.editor.selection.moveToBookmark(bookmark);
    }

}

export const Highlight = new HighlightClass()