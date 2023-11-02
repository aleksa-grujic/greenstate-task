import * as React from "react";
import { SVGProps } from "react";
const LoadingSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      stroke={props.stroke || "#FFF"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.699 14.318a9 9 0 1 0-6.87 6.496"
    />
  </svg>
);
export default LoadingSVG;
