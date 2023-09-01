import type { Editor } from "tinymce";
import { Pages } from "@/components/pages/Pages";
import { store } from "@/core/store"



export const startResizeListener = (editor: Editor) => {

    const updateWidthOfEditor = () => {
        setTimeout(() => {
            const firstPage = Pages.getFirstPage()
            const container = editor.container
            if (firstPage) {
                const rulerHorizontal = container.querySelector('.ruler.horizontal') as HTMLElement
                const containerWidth = container.getBoundingClientRect().width
                const pageWidth = firstPage.getBoundingClientRect().width
                const contentWidth = containerWidth - 100
                if (pageWidth > (contentWidth)) {
                    const offset = ((pageWidth - contentWidth) * 100)/contentWidth
                    if (store.currentZoom < 0) {
                        Pages.body.style.width = (100 + offset) + '%'
                        Pages.root.style.width = '100%'
                    } else {
                        Pages.root.style.width = (100 + offset) + '%'
                        Pages.body.style.width = '100%'
                    }
                    rulerHorizontal.style.width = (100 + offset) + '%'
                } else {
                    Pages.root.style.width = "100%"
                    rulerHorizontal.style.width = "100%"
                    Pages.body.style.width = "100%"
                }
            }
        }, 100)
    }
    const observer = new ResizeObserver(updateWidthOfEditor);
    observer.observe(editor.container);
    editor.on("SetContent", updateWidthOfEditor)
    editor.on("zoom-updated", updateWidthOfEditor)
}