import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Bank icon from Circum Icons
 * @module
 */
export function CiBank(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Bank"},child:[{tag:"path",attr:{d:"M19.505,17.943V10.362a1.491,1.491,0,0,0,1.39-1.12,1.468,1.468,0,0,0-.7-1.68l-7.45-4.3a1.521,1.521,0,0,0-1.49,0l-7.45,4.3a1.468,1.468,0,0,0-.7,1.68,1.487,1.487,0,0,0,1.45,1.12h.13v7.57h-.12a1.5,1.5,0,0,0,0,3h14.87a1.5,1.5,0,0,0,.07-2.989ZM4.555,9.362a.505.505,0,0,1-.25-.94l7.45-4.289a.474.474,0,0,1,.49,0L19.7,8.422a.5.5,0,0,1-.25.94Zm13.95,1v7.57H14.9v-7.57Zm-4.61,0v7.57h-3.61v-7.57Zm-4.61,0v7.57h-3.6v-7.57Zm10.15,9.57H4.565a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5h14.87a.5.5,0,0,1,.5.5A.5.5,0,0,1,19.435,19.932Z"}}]}]})(props);
}
export default CiBank;
