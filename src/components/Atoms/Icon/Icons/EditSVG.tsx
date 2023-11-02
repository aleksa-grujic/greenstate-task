import * as React from "react";
import { SVGProps } from "react";
const EditSVG = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M9.28 19.384 3 21.143l1.758-6.28 11.5-11.443a1.396 1.396 0 0 1 1.995 0l2.47 2.484a1.396 1.396 0 0 1 0 1.982L9.28 19.384Z"
    />
  </svg>
);
export default EditSVG;
