import HTMLtoDOCX from "html-to-docx";
import { store } from '@/core/store';
import {
    widthPoint,
    heightPoint
  } from "@/core/dimensions";

  import { pixelsToTwips } from '@/services/utils/twips'

export const transformHtmlToDocx = (html: string) => {
    const margins = getMarginsInTwips()
  return new Promise(async (resolve, reject) => {
    try {
      const blob = await HTMLtoDOCX(html, null, {
        orientation: 'portrait',
        margins: {
            top: margins.top,
            right: margins.right,
            bottom: margins.bottom,
            left: margins.left,
            header: 720,
            footer: 720,
            gutter: 0
        },
        table: { row: { cantSplit: true } },
        footer: false,
        header: false,
        pageNumber: true,
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
    }
    return newMargins
}
