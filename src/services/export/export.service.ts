import type { Editor } from "tinymce";
import { transformHtmlToDocx } from './html-to-docx';

export const downloadDocx = (html: string) => {
    transformHtmlToDocx(html).then((base64: string) => {
        const downloadLink = document.createElement("a");
        downloadLink.href = base64;
        downloadLink.download = 'file.docx';
        downloadLink.click();
      })
}

export const onClickExportButton = (editor: Editor) => {
  const htmlString = `<!DOCTYPE html>${editor.contentDocument.documentElement.outerHTML}`
    downloadDocx(htmlString)
};
