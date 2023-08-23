import { PaperTinymce } from './PaperTinymce'
import * as demo from "@/assets/demo.html?raw";

const editor = PaperTinymce('#app') as any

const searchParams = new URLSearchParams(location.search);

const demoName = searchParams.get("demo")

if (demoName) {
    setTimeout(() => editor.paperTinymce.setPaperContent(demo.default), 300);
    window.paperEditor = editor
}