import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Text icon from Circum Icons
 * @module
 */
export function CiText(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Text"},child:[{tag:"path",attr:{d:"M18.44,2.06H5.56a1.5,1.5,0,0,0-1.5,1.5v4.5a.5.5,0,0,0,1,0v-1H10V20.94H8a.5.5,0,0,0,0,1h8a.5.5,0,0,0,0-1H14V7.06h4.94v1a.5.5,0,0,0,1,0V3.56A1.5,1.5,0,0,0,18.44,2.06Zm.5,4H14a1,1,0,0,0-1,1V20.94H11V7.06a1,1,0,0,0-1-1H5.06V3.56a.5.5,0,0,1,.5-.5H18.44a.5.5,0,0,1,.5.5Z"}}]}]})(props);
}
export default CiText;
