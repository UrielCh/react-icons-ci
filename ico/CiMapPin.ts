import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MapPin icon from Circum Icons
 * @module
 */
export function CiMapPin(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Map_Pin"},child:[{tag:"path",attr:{d:"M12,2.06a5.5,5.5,0,0,0-.5,10.97v8.41a.5.5,0,0,0,.5.5.5.5,0,0,0,.5-.5V13.03A5.5,5.5,0,0,0,12,2.06Zm0,10a4.5,4.5,0,1,1,4.5-4.5A4.5,4.5,0,0,1,12,12.06Z"}}]}]})(props);
}
export default CiMapPin;
