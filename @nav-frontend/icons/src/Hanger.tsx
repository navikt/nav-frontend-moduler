import * as React from "react";

function Hanger(
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
        d="M12 0c2.205 0 4 1.657 4 3.693 0 .986-.416 1.914-1.172 2.612l-.593.54-.294.28c-.403.393-.745.793-.882 1.195l3.728 1.13c.078-.258.135-.524.17-.798l4.308 1.436A4 4 0 0124 13.883V24H0V13.883a4 4 0 012.735-3.795l4.307-1.436c.036.274.094.541.172.799l3.818-1.16c.152-1.063.902-1.904 1.647-2.607l.74-.68c.38-.35.59-.816.59-1.31 0-1.024-.901-1.856-2.01-1.856-1.054 0-1.922.755-2.002 1.71l-.006.145H8C8 1.657 9.794 0 12 0zm6.234 11.185l-.072.14a7.003 7.003 0 01-12.324 0l-.073-.14-2.397.8a2 2 0 00-1.362 1.738l-.006.16V22l2-.001V18h2v3.999h12V18h2v3.999L22 22v-8.117a2 2 0 00-1.218-1.84l-.15-.057-2.398-.801zM12 10.09l-3.805 1.153A4.989 4.989 0 0012 13a4.989 4.989 0 003.806-1.757L12 10.09z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(Hanger);
export default ForwardRef;
