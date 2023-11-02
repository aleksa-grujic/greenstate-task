import * as React from "react";
import { SVGProps } from "react";
const ValidateSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 24}
    height={props.height || 24}
    viewBox={`0 0 24 24`}
    fill="none"
    {...props}
  >
    <path
      stroke={props.stroke || "#fff"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21.6 12a9.6 9.6 0 0 1-9.6 9.6 9.6 9.6 0 0 1 0-19.2c1.506 0 2.931.347 4.2.965M19.8 6l-8.4 8.4L9 12"
    />
  </svg>
);
export default ValidateSVG;
