import * as React from "react";

function Family1(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 24v-9a6.002 6.002 0 013.719-5.551 5 5 0 114.562.002 6.007 6.007 0 012.848 2.434c.538.543.871 1.29.871 2.115 0 .992-.481 1.871-1.223 2.418.345.169.661.388.94.647a4.502 4.502 0 011.866-1.637A3.5 3.5 0 0115.502 9l.175.005a4.5 4.5 0 114.81.534 6 6 0 013.509 5.211L24 15v9H0zm9-6a2 2 0 00-1.995 1.85L7 20v2h4v-2a2 2 0 00-1.85-1.994L9 18zm6.5-1a2.5 2.5 0 00-2.495 2.336L13 19.5V22h5v-2.5a2.5 2.5 0 00-2.336-2.495L15.5 17zM9 13a1 1 0 100 2 1 1 0 000-2zm6.501-2a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM6 2a3 3 0 100 6 3 3 0 000-6zm12.5 1a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(Family1);
export default ForwardRef;
