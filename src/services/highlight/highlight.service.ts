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
            if (e.key === "Dead") return
            if (e.keyCode === 91 || e.keyCode === 17 || e.keyCode === 229) return;
            if (e.ctrlKey || e.metaKey) return;
            debouncedHighlight.throttle()
        });
        this.editor.on('SetContent', (e) => {
            if (e.skipHighlight) return
            debouncedHighlight.throttle()
        });

    }
    
    escapeRegExp(str: string) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
    }

    highlight() {
        const bookmark = this.editor.selection.getBookmark(2, true);
        let content = GlobalMethods.getContent();
        
        content = this.highlightLogic(content)
        content = this.highlightIDS(content)
        
        this.editor.setContent(content, { skipHighlight: true });
        this.editor.selection.moveToBookmark(bookmark);
    }

    highlightLogic(content: string) {
        XRegExp.matchRecursive(content, '\\{%(?!<mark(.*?)>)', '(?<!<\/mark>)\\%}', 'gm', { unbalanced: 'skip' }).forEach((match) => {
            const x = XRegExp(`{%(?!<mark(.*?)>)${this.escapeRegExp(match)}%}`, 'g');

            const isForLoop = match.trim().substring(0,3) === 'for' || match.trim() === 'endfor'
            const highlightColor = isForLoop ? 'mark-color-cyan' : 'mark-color-greenyellow'
            content = XRegExp.replace(content, x, `{%<mark class="${highlightColor}">${match}</mark>%}`);
        })
        return content
    }

    highlightIDS(content: string) {
        XRegExp.matchRecursive(content, '\\{{(?!<mark(.*?)>)', '(?<!<\/mark>)\\}}', 'gm', { unbalanced: 'skip' }).forEach((match) => {
            const x = XRegExp(`{{(?!<mark(.*?)>)${this.escapeRegExp(match)}}}`, 'g');
            content = XRegExp.replace(content, x, `{{<mark>${match}</mark>}}`);
        })
        return content
    }
}

export const Highlight = new HighlightClass()