// MentalHealthHubLogo.tsx
import React from 'react';

const MentalHealthHubLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 240 80"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="title"
    {...props}
  >
    <title id="title">Mental Health Hub Logo</title>
    <style>
      {`
        .text { font-family: 'Helvetica Neue', sans-serif; font-size: 20px; fill: currentColor; }
        .heart { fill: none; stroke: #2BA36A; stroke-width: 4; }
      `}
    </style>
    <g transform="translate(10,10)">
      <path
        className="heart"
        d="M24,24
          C24,16 18,10 12,10
          C6,10 0,16 0,24
          C0,30 6,36 12,42
          C18,36 24,30 24,24 Z"
        transform="translate(0,5) scale(1.2)"
      />
      <text className="text" x="40" y="20">Mental</text>
      <text className="text" x="40" y="40">Health</text>
      <text className="text" x="40" y="60">Hub</text>
    </g>
  </svg>
);

export default MentalHealthHubLogo;
