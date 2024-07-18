import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Map icon from Circum Icons
 * @module
 */
export function CiMap(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Map"},child:[{tag:"path",attr:{d:"M20.21,4.576a1.906,1.906,0,0,0-1.63-.35l-3.53.89a1.086,1.086,0,0,1-.44,0L9.63,3.876a2.041,2.041,0,0,0-.92,0L4.5,4.936a1.893,1.893,0,0,0-1.44,1.84v11.15a1.871,1.871,0,0,0,.73,1.5,1.906,1.906,0,0,0,1.63.35l3.53-.89a1.086,1.086,0,0,1,.44,0l4.98,1.24a2.315,2.315,0,0,0,.46.05,2.4,2.4,0,0,0,.46-.05l4.21-1.06a1.893,1.893,0,0,0,1.44-1.84V6.076A1.871,1.871,0,0,0,20.21,4.576ZM8.67,17.926l-3.49.87a.89.89,0,0,1-1.12-.87V6.776a.9.9,0,0,1,.68-.87l3.93-.99Zm5.66,1.16-4.66-1.16V4.916l4.66,1.16Zm5.61-1.86a.9.9,0,0,1-.68.87l-3.93.99V6.076l3.49-.87a.908.908,0,0,1,.78.16.886.886,0,0,1,.34.71Z"}}]}]})(props);
}
export default CiMap;
