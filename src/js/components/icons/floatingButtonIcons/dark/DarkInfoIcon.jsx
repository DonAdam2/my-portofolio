import React from 'react';

const DarkInfoIcon = ({ width }) => (
  <svg viewBox="0 0 1288 1101" style={{ width }}>
    <defs>
      <linearGradient
        id="prefix__a"
        x1={644.32}
        y1={1098.66}
        x2={644.32}
        y2={3.13}
        gradientTransform="rotate(-45 644.327 550.891)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#f4b12d" />
        <stop offset={0.23} stopColor="#f7e9cc" />
        <stop offset={0.45} stopColor="#f4b12d" />
        <stop offset={0.68} stopColor="#9b7019" />
        <stop offset={0.88} stopColor="#e9a92a" />
        <stop offset={1} stopColor="#f8ddad" />
      </linearGradient>
      <linearGradient
        id="prefix__b"
        x1={561.57}
        y1={538.99}
        x2={694.12}
        y2={538.99}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#8c6034" />
        <stop offset={0.14} stopColor="#a9824f" />
        <stop offset={0.46} stopColor="#f2d893" />
        <stop offset={0.51} stopColor="#ffe79f" />
        <stop offset={0.67} stopColor="#e2c07c" />
        <stop offset={1} stopColor="#a67033" />
      </linearGradient>
    </defs>
    <title>{'About'}</title>
    <g data-name="Layer 11">
      <rect
        x={124.21}
        y={30.79}
        width={1040.21}
        height={1040.21}
        rx={520.11}
        transform="rotate(45 644.321 550.897)"
        fill="none"
        strokeMiterlimit={10}
        strokeWidth={55.321}
        stroke="url(#prefix__a)"
      />
      <path
        d="M694.08 195.57c1.21 36.47-25.53 65.64-68.08 65.64-37.69 0-64.43-29.17-64.43-65.64 0-37.68 27.95-66.86 66.85-66.86 40.13 0 65.66 29.18 65.66 66.86zm-119.14 753.7V360.9h107v588.37z"
        fill="url(#prefix__b)"
      />
    </g>
  </svg>
);

export default DarkInfoIcon;
