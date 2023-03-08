import Props from "@/types/icon";

function PieChart({ className }: Props) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      data-name="Icon/48 place holder"
      viewBox="0 0 32 32"
    >
      <rect
        width="32"
        height="32"
        fill="#84ae2b"
        data-name="Icon/48 place holder (style)"
        rx="16"
      ></rect>
      <g
        fill="#fff"
        data-name="UI icon/pie_chart/light"
        transform="translate(6 6)"
      >
        <path
          d="M8 16A8 8 0 118 0a1 1 0 011 1v6h6a1 1 0 011 1 8 8 0 01-8 8zM7 2.083A6 6 0 008 14a6 6 0 005.915-5H8a1 1 0 01-1-1V2.083z"
          data-name="Ellipse 207 (Stroke)"
          transform="translate(0 4)"
        ></path>
        <path
          d="M8 9H1a1 1 0 01-1-1V1a1 1 0 011-1 7.947 7.947 0 015.656 2.343A7.949 7.949 0 019 8a1 1 0 01-1 1zM2 2.083V7h4.917a5.974 5.974 0 00-1.675-3.243A5.974 5.974 0 002 2.083z"
          data-name="Ellipse 208 (Stroke)"
          transform="translate(11.001)"
        ></path>
      </g>
    </svg>
  );
}

export default PieChart;
