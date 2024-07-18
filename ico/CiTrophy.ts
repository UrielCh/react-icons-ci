import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Trophy icon from Circum Icons
 * @module
 */
export function CiTrophy(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Trophy"},child:[{tag:"path",attr:{d:"M19.435,5.055h-.97c.01-.12.02-.24.02-.36a1.645,1.645,0,0,0-.45-1.18,1.462,1.462,0,0,0-1.05-.45H7.025a1.484,1.484,0,0,0-1.06.45,1.6,1.6,0,0,0-.44,1.18c0,.12.01.24.02.36h-.98a1.5,1.5,0,0,0-1.5,1.5v2a4.5,4.5,0,0,0,4.27,4.49c1.07,2.3,2.53,3.79,4.17,4.04v2.85h-4a.5.5,0,1,0,0,1h9a.5.5,0,0,0,0-1h-4v-2.85c1.64-.25,3.1-1.74,4.17-4.04a4.493,4.493,0,0,0,4.26-4.49v-2A1.5,1.5,0,0,0,19.435,5.055Zm-15.37,3.5v-2a.5.5,0,0,1,.5-.5h1.04a22.9,22.9,0,0,0,1.28,5.93A3.5,3.5,0,0,1,4.065,8.555Zm7.94,7.57c-2.82,0-5.23-5.04-5.48-11.47a.573.573,0,0,1,.16-.44.48.48,0,0,1,.34-.15h9.96a.442.442,0,0,1,.33.15.62.62,0,0,1,.17.44C17.235,11.085,14.825,16.125,12.005,16.125Zm7.93-7.57a3.508,3.508,0,0,1-2.8,3.42,23.353,23.353,0,0,0,1.27-5.92h1.03a.5.5,0,0,1,.5.5Z"}}]}]})(props);
}
export default CiTrophy;
