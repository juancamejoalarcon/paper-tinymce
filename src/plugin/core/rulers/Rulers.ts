import type { Editor } from 'tinymce';
import * as Events from '../../api/Events';
import RulerComponent from './RulerComponent.svelte'
import { DefaultMargins } from '../shared/utils'

const currentMargin = DefaultMargins

const onMarginChanged = (editor: Editor, vertical: boolean, side: string, value: number): void => {
    if (side === 'start') currentMargin[!vertical ?  'left' : 'top'] = value 
    if (side === 'end') currentMargin[!vertical ?  'right' : 'bottom'] = value 
    Events.fireMarginRulerUpdate(editor, currentMargin)
}

const getOpts = (editor: Editor, vertical: boolean) => {
    const body = editor.getBody();
    return { target: body, props: { defaultMargin: currentMargin, vertical, currentPage: 0, win: editor.iframeElement.contentWindow   } }
}

const createRulers = (editor: Editor): void => {

    const rulerHorizontal = new RulerComponent(getOpts(editor, false))
    rulerHorizontal.$on('margin-changed', ({ detail: { value, side} }) => onMarginChanged(editor, false, side, value))

    

    const rulerVertical = new RulerComponent(getOpts(editor, true))
    rulerVertical.$on('margin-changed', ({ detail: { value, side} }) => onMarginChanged(editor, true, side, value))

    editor.on('currentPageUpdate', ({ currentPage }) => rulerVertical.$set({ currentPage }));
    editor.on('zoomUpdate', ({ zoom }) => rulerVertical.$set({ zoom }));

}

const setup = (editor: Editor): void => {
    setTimeout(() => {
        createRulers(editor)
        
    }, 500);
}

export { setup }