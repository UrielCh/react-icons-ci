import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Stopwatch icon from Circum Icons
 * @module
 */
export function CiStopwatch(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Stopwatch"},child:[{tag:"path",attr:{d:"M17.925,7.828c1.226,1.391 1.97,3.217 1.97,5.215c0,4.358 -3.537,7.895 -7.895,7.895c-4.358,0 -7.896,-3.537 -7.896,-7.895c0,-4.189 3.271,-7.621 7.396,-7.879l0,-1.103l-1.587,0c-0.645,0 -0.643,-1 -0,-1l4.174,0c0.645,0 0.644,1 -0,1l-1.587,0l0,1.103c1.803,0.113 3.443,0.832 4.718,1.956c0.378,-0.378 0.756,-0.756 1.135,-1.134c0.197,-0.198 0.507,-0.183 0.707,-0c0.199,0.183 0.185,0.522 -0,0.707l-1.135,1.135Zm0.97,5.215c0,-3.805 -3.089,-6.895 -6.895,-6.895c-3.806,0.001 -6.896,3.09 -6.896,6.895c0,3.806 3.09,6.895 6.896,6.895c3.806,0 6.895,-3.089 6.895,-6.895Zm-6.395,0.001c0,0.645 -1,0.643 -1,-0l0,-4.704c0,-0.644 1,-0.643 1,-0l0,4.704Z"}}]}]})(props);
}
export default CiStopwatch;
