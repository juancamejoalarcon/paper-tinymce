import type { Editor } from "tinymce";
import * as Api from "./api/Api";
import * as Pages from "./core/pages/Pages";
import * as Rulers from "./core/rulers/Rulers";
import * as Zoom from "./core/zoom/Zoom";
import * as css from "../assets/paper_styles.css?inline";
import * as rulerCss from "./core/rulers/RulerComponent.scss?inline";
import * as zoomCss from "./core/zoom/ZoomComponent.scss?inline";

const parseGeneralStyles = (editor: Editor): void => {
  editor.on("init", () => {
    const doc = editor.contentDocument;
    const styleElement = doc.createElement("style");
    styleElement.textContent = css.default + rulerCss.default + zoomCss.default;
    doc.body.appendChild(styleElement);
  });
};

export const PaperTinyMCE = (editor: Editor): void => {
    parseGeneralStyles(editor);
    const api = Api.get();
    Pages.setup(editor, api, 100);
    Rulers.setup(editor);
    Zoom.setup(editor);
    // return api;
  };

  const exportToModuleLoaders = PaperTinyMCE => {
    if (typeof module === 'object') {
      try {
        module.exports = PaperTinyMCE;
      } catch (_) {
      }
    }
  };
  const exportToWindowGlobal = PaperTinyMCE => {
    (window as any).PaperTinyMCE = PaperTinyMCE;
  };
  exportToWindowGlobal(PaperTinyMCE);
  exportToModuleLoaders(PaperTinyMCE);
