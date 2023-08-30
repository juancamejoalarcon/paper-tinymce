import type { Editor } from "tinymce";
import { downloadDocx } from "./html-to-docx";
import { downloadPdf } from "./html-to-pdf"

export const onClickExportButton = (editor: Editor, type = "docx") => {
  if (type === "pdf") {
    downloadPdf(editor.contentDocument);
    return;
  }
  downloadDocx(editor.contentDocument);
};

