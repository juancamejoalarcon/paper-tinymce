import { Throttler } from "@ephox/katamari";
import type { Editor } from "tinymce";
import { copyEventListener } from "./CopyHandler";
import * as Events from "../../plugin/api/Events";
import type { PagesApi } from "../../plugin/api/Api";
import PageClass from "./PageClass";

const setPages = (editor: Editor, api: PagesApi): void => {
  Events.firePagesUpdate(editor, api);
};

const doubleUpdate = (editor: Editor, api: PagesApi) => {
  // I do it twice because there are no pages on init and it needs to resize after creating the pages
  setPages(editor, api);
  setTimeout(() => setPages(editor, api), 200);
};

const setup = (editor: Editor, api: PagesApi, delay: number): void => {
  const debouncedUpdate = Throttler.first(() => setPages(editor, api), delay);

  setTimeout(() => {
    doubleUpdate(editor, api);

    editor.on("Undo Redo ViewUpdate", debouncedUpdate.throttle);
    editor.on("keyup", (e) => {
      // 91 is the command key on mac (cmd) and 17 is the control key on windows (ctrl)
      // should not update on those keys
      if (e.keyCode === 91 || e.keyCode === 17) return;
      debouncedUpdate.throttle();
    });

    editor.on("SetContent", () => {
      PageClass.resetToBeforeInitalState();
      setPages(editor, api);
      PageClass.applyZoom(PageClass.currentZoom);
    });

    editor.on("SelectionChange", () => {
      PageClass.setCurrentPage(editor);
      Events.fireCurrentPageUpdate(editor, PageClass.currentPage);
    });

    editor.contentWindow.addEventListener("paste", () => {
      setTimeout(() => debouncedUpdate.throttle(), 200);
    });

    copyEventListener(editor);

    editor.on("zoom-updated", ({ zoom }) => PageClass.applyZoom(zoom));
    editor.on("margins-changed", (event) => {
      PageClass.setCurrentMargins(event.margins);
      doubleUpdate(editor, api);
    });
  }, delay);
  editor.on("remove", debouncedUpdate.cancel);
};

const setPagesInEditor = (editor: Editor) => PageClass.build(editor);
const pagesCounter = (editor: Editor) => PageClass.getNumberOfPages();

export { setup, setPages, setPagesInEditor, pagesCounter };
