import type { Editor } from 'tinymce';
import * as Events from '../../api/Events';
import ZoomComponent from './ZoomComponent.svelte'

const createZoom = (editor: Editor): void => {
    const divEl = document.createElement('div')
    document.querySelector('.tox-edit-area').appendChild(divEl)
    const zoom = new ZoomComponent({ target: divEl, props: { editor } })
    zoom.$on('zoom', ({ detail: { zoom } }) => {
        Events.fireZoomUpdate(editor, zoom)
    })
}

const setup = (editor: Editor): void => {
    setTimeout(() => createZoom(editor), 500);
}

export { setup }