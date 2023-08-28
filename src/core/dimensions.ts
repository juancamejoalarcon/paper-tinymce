export const A4Dimensions = {
  width: "21cm",
  height: "29.7cm",
  heightInPixels: 1122.519685,
  widthInPixes: 793.7007874,
};

export interface Margins {
  top: number;
  left: number;
  bottom: number;
  right: number;
}

export const DefaultMargins: Margins = {
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
};

export const rulerWidthNumberOfPoints = 66;
export const rulerHeightNumberOfPoints = 66;

export const widthPoint = A4Dimensions.widthInPixes / rulerWidthNumberOfPoints;
export const heightPoint = A4Dimensions.heightInPixels / rulerHeightNumberOfPoints;
