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

    highlight() {
        const bookmark = this.editor.selection.getBookmark(2, true);
        let content = GlobalMethods.getContent();
        const matches = XRegExp.matchRecursive(content, '(?<!<mark>)\\{%', '\\%}(?!<\/mark>)', 'gm', { unbalanced: 'skip' });
        matches.forEach((match) => {

            console.log(match)
            // var re = new RegExp(`(?<!<mark>){%${match}%}`, "mi");

            const name = XRegExp(match);

            content = XRegExp.replace(content, `{%${match}%}`, `<mark>{%${match}%}</mark>`);
            
        })
        // Hghlight Logic
        // content = content.replace(/(?<!<mark>){%([^}]+)%}/g, '<mark>{%$1%}</mark>');
        // Highlight IDs
        // content = content.replace(/(?<!<mark>){{([^}]+)}}/g, '<mark>{{$1}}</mark>');
        
        this.editor.setContent(content);
        this.editor.selection.moveToBookmark(bookmark);
    }

}

export const Highlight = new HighlightClass()