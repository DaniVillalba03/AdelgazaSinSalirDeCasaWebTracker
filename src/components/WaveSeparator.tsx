import React from 'react';

interface WaveSeparatorProps {
  topColor: string; // color on the top section
  bottomColor: string; // color on the bottom section
  flip?: boolean; // flip vertically
  height?: number; // svg height
}

export const WaveSeparator: React.FC<WaveSeparatorProps> = ({ topColor, bottomColor, flip = false, height = 100 }) => {
  const id = `wave-${Math.random().toString(36).slice(2, 9)}`;
  const transform = flip ? 'scale(1, -1)' : undefined;

  return (
    <div style={{ lineHeight: 0 }} aria-hidden>
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        width="100%"
        height={height}
        style={{ display: 'block', transform }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`${id}-grad`} x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stopColor={topColor} />
            <stop offset="100%" stopColor={bottomColor} />
          </linearGradient>
        </defs>

        <path
          d="M0,32 C160,96 320,0 480,32 C640,64 800,96 960,64 C1120,32 1280,64 1440,32 L1440 120 L0 120 Z"
          fill={`url(#${id}-grad)`}
        />
      </svg>
    </div>
  );
};

export default WaveSeparator;
