import * as React from "react";
import { SVGProps } from "react";
const LogoutSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 24}
    height={props.height || 24}
    viewBox={`0 0 24 24`}
    fill="none"
    {...props}
  >
    <g fill={props.stroke || "#fff"}>
      <path d="M9.3 0a.872.872 0 1 0 0 1.744 7.556 7.556 0 0 1 0 15.112.872.872 0 1 0 0 1.744A9.3 9.3 0 1 0 9.3 0Z" />
      <path d="M.872 8.428a.872.872 0 1 0 0 1.744h7.777l-2 2a.872.872 0 1 0 1.233 1.232l3.487-3.488a.872.872 0 0 0 0-1.232L7.882 5.196A.872.872 0 0 0 6.65 6.43l1.999 2H.872Z" />
    </g>
  </svg>
);
export default LogoutSVG;
