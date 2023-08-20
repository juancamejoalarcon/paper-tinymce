import type { Editor } from 'tinymce';
import type { Margins } from './dimensions'
import { DefaultMargins } from './dimensions'

class Store {
    
    editor: Editor;
    currentMargins = { ...DefaultMargins }
    currentZoom: number = 0

    setEditor(editor: Editor) {
        this.editor = editor
    }

    updateGlobalMargins(margins: Margins) {
        this.editor.dispatch('global-margins-changed', { margins })
    }

    updateMargins(margins: Margins) {
        this.currentMargins = margins
        this.editor.dispatch('margins-changed', { margins })
    }

    updateZoom(zoom: number) {
        this.currentZoom = zoom
        this.editor.dispatch('zoom-updated', { zoom })
    }
}

export const store = new Store()