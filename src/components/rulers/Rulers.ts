import type { Editor } from "tinymce";
import { store } from "@/core/store";
import { A4Dimensions, rulerWidthNumberOfPoints } from "@/core/dimensions";
import RulerComponent from "./RulerComponent.svelte";

class Ruler {
  editor: Editor = null;

  horizontalComponent: RulerComponent;
  verticalComponent: RulerComponent;

  currentParagraphSelected: HTMLElement | null = null;

  widthPoint = A4Dimensions.widthInPixes / rulerWidthNumberOfPoints;

  constructor() {}

  start(editor: Editor) {
    this.editor = editor;
    setTimeout(() => {
      this.createRulers();
      this.onHorizontalChange();
      this.onVerticalChange();
      this.onIndentChange();
      this.setEvents();
    }, 0);
  }

  createRulers() {
    this.horizontalComponent = new RulerComponent(
      this.getRulerOptions(this.editor, false)
    );
    this.verticalComponent = new RulerComponent(
      this.getRulerOptions(this.editor, true)
    );
  }

  getRulerOptions(editor: Editor, vertical: boolean) {
    const divEl = document.createElement("div");
    store.rootContainerEl.querySelector(".tox-edit-area").appendChild(divEl);
    return {
      target: divEl,
      props: {
        defaultMargin: store.currentMargins,
        vertical,
        currentPage: 0,
        win: editor.iframeElement.contentWindow,
      },
    };
  }

  setEvents() {
    this.editor.on("current-page-updated", ({ currentPage }) =>
      this.verticalComponent.$set({ currentPage })
    );

    this.editor.on("zoom-updated", ({ zoom }) =>
      this.verticalComponent.$set({ currentZoom: zoom })
    );

    this.editor.on("SelectionChange", () => {
      this.setParagraphSelected(this.editor);
      this.getMarginsOfParagraph(this.currentParagraphSelected);
    });

    this.onGlobalMarginsChanged();
  }

  setParagraphSelected(editor: Editor) {
    let firstElSelected = editor.selection.getRng()
      .startContainer as HTMLElement;

    if (firstElSelected.parentElement.tagName !== "SECTION") {
      while (firstElSelected.parentElement.tagName !== "SECTION")
        firstElSelected = firstElSelected.parentElement;
    }

    this.currentParagraphSelected = firstElSelected;
  }

  getMarginsOfParagraph(paragraph: HTMLElement) {
    const left = paragraph.style.marginLeft.replace("px", "");
    const right = paragraph.style.marginRight.replace("px", "");
    const indent = paragraph.style.textIndent.replace("px", "");
    let startValue = 0 + store.currentMargins.left;
    let endValue = rulerWidthNumberOfPoints - store.currentMargins.right;
    let indentValue = 0 + store.currentMargins.left;

    if (left) {
      startValue =
        Math.round(parseInt(left) / this.widthPoint) +
        store.currentMargins.left;
      indentValue = startValue;
    }
    if (right) {
      endValue =
        rulerWidthNumberOfPoints -
        (Math.round(parseInt(right) / this.widthPoint) +
          store.currentMargins.right);
    }
    if (indent)
      indentValue = Math.round(parseInt(indent) / this.widthPoint) + startValue;

    this.horizontalComponent.$set({ startValue, endValue, indentValue });
  }

  onHorizontalChange() {
    this.horizontalComponent.$on(
      "margin-changed",
      ({ detail: { value, side } }) => {
        if (side === "global-start" || side === "global-end") {
          const margins = store.currentMargins;
          if (side === "global-start") margins.left = value;
          if (side === "global-end") margins.right = value;
          store.updateMargins(margins);
          return;
        }
        const style = this.currentParagraphSelected.style;
        if (side === "start") {
          style.marginLeft = this.widthPoint * value + "px";
          // updated indent
          const indent = style.textIndent.replace("px", "");
          let indentValue = 0;
          if (indent)
            indentValue =
              Math.round(parseInt(indent) / this.widthPoint) + value;
          this.horizontalComponent.$set({ indentValue });
        }
        if (side === "end") style.marginRight = this.widthPoint * value + "px";
      }
    );
  }

  onVerticalChange() {
    this.verticalComponent.$on(
      "margin-changed",
      ({ detail: { value, side } }) => {
        const margins = store.currentMargins;
        if (side === "start") margins.top = value;
        if (side === "end") margins.bottom = value;
        store.updateMargins(margins);
      }
    );
  }

  onIndentChange() {
    this.horizontalComponent.$on("indent-changed", ({ detail: { value } }) => {
      let left = parseInt(
        this.currentParagraphSelected.style.marginLeft.replace("px", "")
      );
      if (!left) left = 0;
      this.currentParagraphSelected.style.textIndent =
        this.widthPoint * value - Math.round(left) + "px";
    });
  }

  onGlobalMarginsChanged() {
    this.editor.on("global-margins-changed", (event) => {
      const margins = store.currentMargins;
      margins.left = event.margins.left;
      margins.right = event.margins.right;
      margins.top = event.margins.top;
      margins.bottom = event.margins.bottom;
      this.horizontalComponent.$set({
        globalStartValue: margins.left,
        startValue: margins.left,
        indentValue: margins.left,
        globalEndValue: rulerWidthNumberOfPoints - margins.right,
        endValue: rulerWidthNumberOfPoints - margins.right,
      });
      this.verticalComponent.$set({
        startValue: margins.top,
        endValue: rulerWidthNumberOfPoints - margins.bottom,
      });
      store.updateMargins(margins);
    });
  }
}

export const Rulers = new Ruler();
