import * as React from "react";

function Dishwasher(
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
        d="M4 3v2h16V3H4zm0 9V7h16v5a4 4 0 00-6-3.465A3.981 3.981 0 0012 8c-.729 0-1.412.195-2 .535A4 4 0 004 12zm8.5-1.937A2.001 2.001 0 0010 12h2c0-.703.181-1.363.5-1.937zM14 12h4a2 2 0 10-4 0zm-6-2c.172 0 .34.022.5.063A3.982 3.982 0 008 12H6a2 2 0 012-2zM2 2v10h-.69a1 1 0 00-.966 1.263l2.455 9a1 1 0 00.965.737h16.472a1 1 0 00.965-.737l2.454-9A1 1 0 0022.692 12H22V2a1 1 0 00-1-1H3a1 1 0 00-1 1zm2.528 19l-1.91-7h18.764l-1.91 7H4.528zM15 18v-2H9v2h6z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(Dishwasher);
export default ForwardRef;
