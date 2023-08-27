// Returns the element height including margins
export const getOuterHeightOfElement = (element: HTMLElement, win: Window = window): number => {
  const height = element.offsetHeight;
  const style = win.getComputedStyle(element);

  return ["top", "bottom"]
    .map((side: any) => parseInt(style[`margin-${side}` as any]))
    .reduce((total, side) => total + side, height);
};
