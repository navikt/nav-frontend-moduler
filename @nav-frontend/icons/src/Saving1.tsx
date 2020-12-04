import * as React from "react";

function Saving1(
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
        d="M6 1c.181 0 .36.049.514.141l2.754 1.635A12.665 12.665 0 0113 2.221c6.075 0 11 4.21 11 9.405 0 3.3-1.99 6.205-5 7.883V24h-2v-3.611c-1.24.414-2.588.641-4 .641a12.76 12.76 0 01-3-.354V24H8v-3.995c-1.99-.87-3.63-2.243-4.69-3.924H0V8.16h2.77A9.372 9.372 0 015 5.172V1.99C5 1.443 5.448 1 6 1zm7 5.181c1.475 0 2.842.355 3.97.96l-.692 1.885c-.865-.53-2.001-.865-3.278-.865-1.277 0-2.412.335-3.277.865L9.03 7.141c1.128-.605 2.496-.96 3.97-.96z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(Saving1);
export default ForwardRef;
