import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Pill icon from Circum Icons
 * @module
 */
export function CiPill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Pill"},child:[{tag:"path",attr:{d:"M19.31,4.691a5.5,5.5,0,0,0-7.78,0l-6.84,6.84a5.5,5.5,0,0,0,3.89,9.39,5.524,5.524,0,0,0,3.89-1.61l6.84-6.84a5.5,5.5,0,0,0,0-7.78Zm-.71,7.07-3.42,3.42L8.82,8.821,12.24,5.4a4.5,4.5,0,0,1,7.68,3.17A4.429,4.429,0,0,1,18.6,11.761Z"}}]}]})(props);
}
export default CiPill;
