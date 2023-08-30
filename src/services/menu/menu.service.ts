import type { Editor } from "tinymce";
import { getBasicMenuConfig } from "./basic-menu-config";
import { onClickImportButton } from "../import/import.service";
import { onClickExportButton } from "../export/export.service"

export const registerImportButton = (editor: Editor) => {
  editor.ui.registry.addNestedMenuItem("import", {
    text: "Import",
    getSubmenuItems: function () {
      return [
        {
          type: "menuitem",
          text: "Docx",
          onAction: function () {
            onClickImportButton(editor);
          },
        },
      ];
    },
  });
};

export const registerExportButton = (editor: Editor) => {
  editor.ui.registry.addNestedMenuItem("export", {
    text: "Export",
    getSubmenuItems: function () {
      return [
        {
          type: "menuitem",
          text: "Docx",
          onAction: function () {
             onClickExportButton(editor)
          },
        },
        {
          type: "menuitem",
          text: "PDF",
          onAction: function () {
             onClickExportButton(editor, 'pdf')
          },
        },
      ];
    },
  });
};

export const getMenuOptions = () => {
  const { menubar, toolbar } = getBasicMenuConfig();
  return {
    menu: {
      file: {
        title: "File",
        items: "import | newdocument preview | export",
      },
    },
    toolbar,
    menubar: "file " + menubar,
  };
};
