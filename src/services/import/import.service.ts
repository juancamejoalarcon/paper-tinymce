import type { Editor } from "tinymce";
import mammoth from "mammoth";
import { getGlobalSettings } from './global-settings'
import { store } from '@/core/store'

function transformElement(element) {
  if (element.children) {
    element.children.forEach(element => {
      if (element.indent && element.indent.start) {
        console.log('-----')
        console.log(element)
        console.log('-----')
      }
    });
}
  return element;
}

const options = {
  transformDocument: transformElement
};

export const transformDocxToHtml = (arrayBuffer: ArrayBuffer) => {
    return new Promise((resolve, reject) => {
        mammoth.convertToHtml({ arrayBuffer }, options).then(
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
        const arrayBuffer = loadEvent.target.result;
        getGlobalSettings(arrayBuffer as ArrayBuffer)
        .then((globalSettings: any) => {
          store.updateGlobalMargins(globalSettings.margins)
          transformDocxToHtml(arrayBuffer as any)
          .then((result: string) => {
              editor.setContent(result);
          }).catch((error: any) => {
              console.error(error)
          })
        })

      };

      reader.readAsArrayBuffer(file);
      modal.close();
    });
};
