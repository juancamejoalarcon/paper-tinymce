import type { Editor } from "tinymce";
import { getBasicMenuConfig } from "./basic-menu-config";
import { onClickImportButton } from '../import/import.service'

export const registerImportButton = (editor: Editor) => {
  editor.ui.registry.addToggleMenuItem("importdocx", {
    text: "Docx",
    icon: "document-properties",
    onAction: () => {
      onClickImportButton(editor)
    },
  });
};

export const getMenuOptions = () => {
  const { menubar, toolbar } = getBasicMenuConfig();
  return {
    menu: {
      custom: { title: "Import", items: "importdocx" },
    },
    toolbar,
    menubar: "custom " + menubar,
  };
};
