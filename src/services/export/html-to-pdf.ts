import html2pdf from "html2pdf.js";
import { store } from '@/core/store';
import { pixelsToMm } from "@/services/utils/size";
import {
    widthPoint,
    heightPoint
  } from "@/core/dimensions";

export const downloadPdf = (document: Document) => {
  const bodyCloned = document.body.cloneNode(true) as HTMLBodyElement;
  const pages = bodyCloned.querySelectorAll(".paper-page");
  pages.forEach((page) => {
    const section = page.firstElementChild;
    while (section.childNodes.length > 0) {
      bodyCloned.appendChild(section.childNodes[0]);
    }
  });
  bodyCloned.querySelector("#paper-tinymce-pages").remove();
  bodyCloned.style.fontFamily = 'Arial'
  html2pdf()
    .set({
      margin: getMarginsInMm(),
    })
    .from(bodyCloned)
    .save();
};

const getMarginsInMm = () => {
    const currentMargins = store.getCurrentMargins();
    const newMargins = {
        top: pixelsToMm(heightPoint * currentMargins.top),
        left: pixelsToMm(widthPoint * currentMargins.left),
        bottom: pixelsToMm(heightPoint * currentMargins.bottom),
        right: pixelsToMm(widthPoint * currentMargins.right),
    }
    return [ newMargins.top, newMargins.left, newMargins.bottom, newMargins.right]
}
