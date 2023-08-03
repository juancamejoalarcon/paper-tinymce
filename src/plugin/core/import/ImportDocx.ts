import type { Editor } from "tinymce";
import mammoth from "mammoth";

class ImportDocx {
  private editor: Editor;
  init(editor: Editor) {
    this.editor = editor;
    this.addDialogButtonToUploadFile(editor);
  }

  transformDocxToHtml(arrayBuffer: ArrayBuffer) {
    mammoth.convertToHtml({ arrayBuffer }).then(
        (result) => {
          this.editor.setContent(result.value);
        },
        (error) => console.error(error)
      );
  }

  addDialogButtonToUploadFile(editor: Editor) {
    editor.ui.registry.addButton("importdocx", {
      text: "Import DOCX",
      onAction: () => {
        const modal = editor.windowManager.open({
          title: "Upload DOCX File",
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
              this.transformDocxToHtml(arrayBuffer);
            };

            reader.readAsArrayBuffer(file);
            modal.close();
          });
      },
    });
  }
}

export default new ImportDocx();
