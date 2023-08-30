import HTMLtoDOCX from "html-to-docx";
import { store } from "@/core/store";
import { widthPoint, heightPoint } from "@/core/dimensions";

import { pixelsToTwips } from "@/services/utils/twips";

export const downloadDocx = (document: Document) => {
  transformHtmlToDocx(document).then((base64: string) => {
    const downloadLink = document.createElement("a");
    downloadLink.href = base64;
    downloadLink.download = "file.docx";
    downloadLink.click();
  });
};

export const transformHtmlToDocx = (document: Document) => {
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

  const html =`<!DOCTYPE html><html>${bodyCloned.outerHTML}</html>`
  const margins = getMarginsInTwips();
  return new Promise(async (resolve, reject) => {
    try {
      const blob = await HTMLtoDOCX(html, null, {
        orientation: "portrait",
        margins: {
          top: margins.top,
          right: margins.right,
          bottom: margins.bottom,
          left: margins.left,
          header: 720,
          footer: 720,
          gutter: 0,
        },
        table: { row: { cantSplit: true } },
        footer: false,
        header: false,
        pageNumber: true,
        font: "Arial",
      });
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        resolve(reader.result);
      };
    } catch (error) {
      reject(error);
    }
  });
};

const getMarginsInTwips = () => {
  const currentMargins = store.getCurrentMargins();
  const newMargins = {
    top: pixelsToTwips(heightPoint * currentMargins.top),
    bottom: pixelsToTwips(heightPoint * currentMargins.bottom),
    left: pixelsToTwips(widthPoint * currentMargins.left),
    right: pixelsToTwips(widthPoint * currentMargins.right),
  };
  return newMargins;
};
