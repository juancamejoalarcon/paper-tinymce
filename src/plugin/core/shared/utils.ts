export const makeAllElementsNonEditable = (container: HTMLElement) => {
  const setUndeditable = (el: HTMLElement) => {
    el.setAttribute("contenteditable", "false");
    el.style.cursor = "default";
    el.style.outline = "none";
  }
  setUndeditable(container)
  container.querySelectorAll("*").forEach((el: HTMLElement) => setUndeditable(el));
};

export const A4Dimensions = {
  width: '21cm',
  height: '29.7cm',
  heightInPixels: 1122.519685,
  widthInPixes: 793.7007874,
};

export interface Margins {
  top: number,
  left: number,
  bottom: number,
  right: number
}

export const DefaultMargins: Margins = {
  top: 0,
  left: 0,
  bottom: 0,
  right: 0
}

// Returns the element height including margins
export const getOuterHeightOfElement = (element: HTMLElement): number => {
  const height = element.offsetHeight;
  const style = window.getComputedStyle(element);

  return [ 'top', 'bottom' ].map((side: any) => parseInt(style[`margin-${side}` as any])).reduce((total, side) => total + side, height);
};

export const rulerWidthNumberOfPoints = 66;
export const rulerHeightNumberOfPoints = 66;
