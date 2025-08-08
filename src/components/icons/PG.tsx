import * as React from "react";

export function PG(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
        fill="url(#paint0_linear_pg)"
        stroke="none"
      />
      <defs>
        <linearGradient
          id="paint0_linear_pg"
          x1="2"
          y1="2"
          x2="12"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ACAAFF" />
          <stop offset="1" stopColor="#C0E8FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}
