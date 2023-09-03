import type { Editor } from "tinymce"
import { Throttler } from "@ephox/katamari";
import { GlobalMethods } from "@/core/editor-global-methods";
import XRegExp from "xregexp"

class HighlightClass {

    editor: Editor

    start(editor: Editor) {
        this.editor = editor
        this.setEvents()
    }

    setEvents() {
        const debouncedHighlight = Throttler.first(() => this.highlight(), 200);
        this.editor.on('keyup', (e) => {
            if (e.keyCode === 91 || e.keyCode === 17) return;
            if (e.ctrlKey || e.metaKey) return;
            debouncedHighlight.throttle()
        });
    }
    
    escapeRegExp(str: string) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
    }

    highlight() {
        const bookmark = this.editor.selection.getBookmark(2, true);
        let content = GlobalMethods.getContent();
        // Hghlight Logic
        XRegExp.matchRecursive(content, '(?<!<mark>)\\{%', '\\%}(?!<\/mark>)', 'gm', { unbalanced: 'skip' }).forEach((match) => {
            const x = XRegExp(`(?<!<mark>){%${this.escapeRegExp(match)}%}`, 'g');
            content = XRegExp.replace(content, x, `<mark>{%${match}%}</mark>`);
        })
        // Highlight IDs
        XRegExp.matchRecursive(content, '(?<!<mark>)\\{{', '\\}}(?!<\/mark>)', 'gm', { unbalanced: 'skip' }).forEach((match) => {
            const x = XRegExp(`(?<!<mark>){{${this.escapeRegExp(match)}}}`, 'g');
            content = XRegExp.replace(content, x, `<mark>{{${match}}}</mark>`);
        })
        
        this.editor.setContent(content);
        this.editor.selection.moveToBookmark(bookmark);
    }

}

export const Highlight = new HighlightClass()