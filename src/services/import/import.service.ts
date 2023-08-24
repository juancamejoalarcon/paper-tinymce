import type { Editor } from "tinymce";
import mammoth from "mammoth";
import { getGlobalSettings } from './global-settings'
import { store } from '@/core/store';

const styleMap = [
  "p[style-name='Title'] => h1:fresh",
]

function transformDocument(element) {
  return element;
}


const options = {
  transformDocument,
  styleMap
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
          html: '<input id="paper-tinymce-upload-input" type="file" accept=".docx" />',
        },
      ],
    },
    buttons: [],
  });
  store.rootContainerEl
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
              editor.dispatch('reset-pages')
              editor.setContent(result);
              setTimeout(() => editor.dispatch('refresh-pages'), 300);
          }).catch((error: any) => {
              console.error(error)
          })
        })

      };

      reader.readAsArrayBuffer(file);
      modal.close();
    });
};
