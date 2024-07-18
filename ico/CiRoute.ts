import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Route icon from Circum Icons
 * @module
 */
export function CiRoute(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Route"},child:[{tag:"path",attr:{d:"M21.792,17.086c-.58-.58-1.16-1.17-1.75-1.75-.08-.08-.16-.17-.25-.25a.492.492,0,0,0-.7,0,.5.5,0,0,0,0,.71l1.14,1.14H9.282a2.22,2.22,0,0,1,0-4.44h3a3.215,3.215,0,1,0,0-6.43H7.012a2.5,2.5,0,1,0,0,1h5.27a2.215,2.215,0,1,1,0,4.43h-3a3.22,3.22,0,1,0,0,6.44h10.96l-.9.9c-.09.08-.17.17-.25.25a.5.5,0,0,0,0,.71.511.511,0,0,0,.7,0l1.75-1.75.25-.25A.5.5,0,0,0,21.792,17.086ZM4.562,8.066a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,4.562,8.066Z"}}]}]})(props);
}
export default CiRoute;
