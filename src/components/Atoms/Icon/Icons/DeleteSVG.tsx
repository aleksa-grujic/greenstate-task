import * as React from "react";
import { SVGProps } from "react";
const DeleteSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 24}
    height={props.height || 24}
    viewBox={`0 0 24 24`}
    fill="none"
    {...props}
  >
    <g
      stroke={props.stroke || "#fff"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.524}
    >
      <path d="M3 6.571h18.286M5.286 6.571H19v13.715a1.524 1.524 0 0 1-1.524 1.523H6.81a1.524 1.524 0 0 1-1.523-1.523V6.57Z" />
      <path d="M8.334 6.571V5.81a3.81 3.81 0 1 1 7.619 0v.761M9.857 11.145v6.098M14.429 11.145v6.098" />
    </g>
  </svg>
);
export default DeleteSVG;
