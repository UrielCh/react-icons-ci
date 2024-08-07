import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Gps icon from Circum Icons
 * @module
 */
export function CiGps(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"GPS"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M12,14.5A2.5,2.5,0,1,1,14.5,12,2.5,2.5,0,0,1,12,14.5Zm0-4A1.5,1.5,0,1,0,13.5,12,1.5,1.5,0,0,0,12,10.5Z"}},{tag:"path",attr:{d:"M21.435,11.505h-1.46a7.98,7.98,0,0,0-7.48-7.48V2.565a.508.508,0,0,0-.5-.5.515.515,0,0,0-.5.5v1.46a8,8,0,0,0-7.48,7.48H2.565a.5.5,0,1,0,0,1h1.45a8.012,8.012,0,0,0,7.48,7.48v1.45a.508.508,0,0,0,.5.5.5.5,0,0,0,.5-.5v-1.45a8,8,0,0,0,7.48-7.48h1.46a.5.5,0,0,0,0-1ZM12,19.005a7,7,0,1,1,7-7A7.021,7.021,0,0,1,12,19.005Z"},child:[]}]}]}]})(props);
}
export default CiGps;
