import type { Editor } from "tinymce";
import mammoth from "mammoth";

export const transformDocxToHtml = (arrayBuffer: ArrayBuffer) => {
    return new Promise((resolve, reject) => {
        mammoth.convertToHtml({ arrayBuffer }).then(
            (result) => {
                resolve(result.value)
            },
            (error) => reject(error)
          );
    })
  }

export const onClickImportButton = (editor: Editor) => {
  const modal = editor.windowManager.open({
    title: "Upload Docx File",
    body: {
      type: "panel",
      items: [
        {
          type: "htmlpanel",
          html: '<input id="paper-tinymce-upload-input" type="file" />',
        },
      ],
    },
    buttons: [],
  });
  document
    .querySelector("#paper-tinymce-upload-input")
    .addEventListener("change", (event: any) => {
      const file = event.target.files[0];

      const reader = new FileReader();

      reader.onload = (loadEvent) => {
        const arrayBuffer = loadEvent.target.result as ArrayBuffer;
        transformDocxToHtml(arrayBuffer)
        .then((result: string) => {
            editor.setContent(result);
        }).catch((error: any) => {
            console.error(error)
        })
      };

      reader.readAsArrayBuffer(file);
      modal.close();
    });
};
