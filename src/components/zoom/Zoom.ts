import type { Editor } from 'tinymce';
import { store } from '@/core/store'
import ZoomComponent from './ZoomComponent.svelte'

class ZoomClass {

    editor: Editor = null;

    zoomComponent: ZoomComponent;
    
    start(editor: Editor) {
        this.editor = editor

        setTimeout(() => {
            this.createZoomElement()
            this.onZoomChanged()
        })
    }

    createZoomElement() {

        const divEl = document.createElement('div')
        store.rootContainerEl.querySelector('.tox-edit-area').appendChild(divEl);

        this.zoomComponent = new ZoomComponent({ target: divEl, props: { } })
    }

    onZoomChanged() {
        this.zoomComponent.$on('zoom', ({ detail: { zoom } }) => {
            store.updateZoom(zoom)
        })
    }

}

export const Zoom = new ZoomClass();