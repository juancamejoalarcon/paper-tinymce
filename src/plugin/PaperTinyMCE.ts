import type { Editor } from "tinymce";
import * as Api from "./api/Api";
import * as Pages from "./core/pages/Pages";
import * as Rulers from "./core/rulers/Rulers";
import * as Zoom from "./core/zoom/Zoom";
import * as css from "../assets/paper_styles.css?inline";
import * as rulerCss from "./core/rulers/RulerComponent.scss?inline";
import ImportDocx from "./core/import/ImportDocx";

export const PaperTinyMCE = {
  init: (editor: Editor): void => {
    const api = Api.get();
    Pages.setup(editor, api, 100);
    Rulers.setup(editor);
    Zoom.setup(editor);
    ImportDocx.init(editor)
    // return api;
  },
  getStyles: () => {
    return css.default + rulerCss.default;
  },
};

const exportToModuleLoaders = (PaperTinyMCE) => {
  if (typeof module === "object") {
    try {
      module.exports = PaperTinyMCE;
    } catch (_) {}
  }
};
const exportToWindowGlobal = (PaperTinyMCE) => {
  (window as any).PaperTinyMCE = PaperTinyMCE;
};
exportToWindowGlobal(PaperTinyMCE);
exportToModuleLoaders(PaperTinyMCE);
