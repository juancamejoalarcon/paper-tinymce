import type { Editor } from 'tinymce';
import * as Events from '../../api/Events';
import RulerComponent from './RulerComponent.svelte'
import {
    A4Dimensions,
    DefaultMargins,
    rulerWidthNumberOfPoints,
  } from "../shared/utils";

const currentMargin = DefaultMargins

class Ruler {

    horizontalComponent: RulerComponent

    currentParagraphSelected: HTMLElement | null = null

    widthPoint = A4Dimensions.widthInPixes / rulerWidthNumberOfPoints;

    constructor(horizontalComponent: RulerComponent) {
        this.horizontalComponent = horizontalComponent
        this.onHorizontalChange()
        this.onIndentChange()
    }

    setParagraphSelected(editor: Editor) {
        let firstElSelected = editor.selection.getRng().startContainer as HTMLElement
        
        if (firstElSelected.parentElement.tagName !== 'SECTION') {
            while (firstElSelected.parentElement.tagName !== 'SECTION') firstElSelected = firstElSelected.parentElement
        }

        this.currentParagraphSelected = firstElSelected
    }

    getMarginsOfParagraph(paragraph: HTMLElement) {
        const left = paragraph.style.marginLeft.replace('px', '')
        const right = paragraph.style.marginRight.replace('px', '')
        const indent = paragraph.style.textIndent.replace('px', '')
        let startValue = 0 + currentMargin.left
        let endValue = rulerWidthNumberOfPoints - currentMargin.right
        let indentValue = 0 + currentMargin.left

        if (left) {
            startValue = Math.round(parseInt(left) / this.widthPoint) + currentMargin.left
            indentValue = startValue
        }
        if (right) {
            endValue = (rulerWidthNumberOfPoints - (Math.round(parseInt(right) / this.widthPoint) + currentMargin.right))
        }
        if (indent) indentValue = Math.round(parseInt(indent) / this.widthPoint) + startValue

        this.horizontalComponent.$set({ startValue, endValue, indentValue })
    }

    onHorizontalChange() {
        this.horizontalComponent.$on('margin-changed', ({ detail: { value, side} }) => {
            if (side === 'global-start' || side === 'global-end') return
            const style = this.currentParagraphSelected.style
            if (side === 'start') {
                style.marginLeft = this.widthPoint * value + "px";
                // updated indent
                const indent = style.textIndent.replace('px', '')
                let indentValue = 0
                if (indent) indentValue = Math.round(parseInt(indent) / this.widthPoint) + value
                this.horizontalComponent.$set({ indentValue })

            }
            if (side === 'end') style.marginRight = this.widthPoint * value + "px";

        })
    }

    onIndentChange() {
        this.horizontalComponent.$on('indent-changed', ({ detail: { value} }) => {
            let left = parseInt(this.currentParagraphSelected.style.marginLeft.replace('px', ''))
            if (!left) left = 0
            this.currentParagraphSelected.style.textIndent = ((this.widthPoint * value) - (Math.round(left))) + "px";
        })
    }


}


const onMarginChanged = (editor: Editor, vertical: boolean, side: string, value: number): void => {
    if (vertical) {
        if (side === 'start' ) currentMargin.top = value 
        if (side === 'end') currentMargin.bottom = value 
    } else {
        if (side === 'global-start' ) currentMargin.left = value 
        if (side === 'global-end') currentMargin.right = value 
    }
    Events.fireMarginRulerUpdate(editor, currentMargin)
}

const getOpts = (editor: Editor, vertical: boolean) => {
    const divEl = document.createElement('div')
    document.querySelector('.tox-edit-area').appendChild(divEl)
    return { target: divEl, props: { defaultMargin: currentMargin, vertical, currentPage: 0, win: editor.iframeElement.contentWindow   } }
}

const createRulers = (editor: Editor): void => {

    const rulerHorizontal = new RulerComponent(getOpts(editor, false))
    rulerHorizontal.$on('margin-changed', ({ detail: { value, side} }) => onMarginChanged(editor, false, side, value))


    const rulerVertical = new RulerComponent(getOpts(editor, true))
    rulerVertical.$on('margin-changed', ({ detail: { value, side} }) => onMarginChanged(editor, true, side, value))

    const ruler = new Ruler(rulerHorizontal)

    editor.on('currentPageUpdate', ({ currentPage }) => rulerVertical.$set({ currentPage }));

    editor.on('zoomUpdate', ({ zoom }) => rulerVertical.$set({ currentZoom: zoom }))

    editor.on("SelectionChange", () => {
        ruler.setParagraphSelected(editor)
        ruler.getMarginsOfParagraph(ruler.currentParagraphSelected)
    });

}

const setup = (editor: Editor): void => {
    setTimeout(() => {
        createRulers(editor)
        
    }, 500);
}

export { setup }