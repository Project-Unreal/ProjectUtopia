import React, { ReactElement } from 'react';

import './VertButton.scss';

export const SingleVertButton = ({
  onClick,
  disable,
}: {
  onClick?: (event: React.MouseEvent<SVGSVGElement>) => void;
  disable?: boolean;
}): ReactElement => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 20 20"
      onClick={disable ? null : onClick}
    >
      <radialGradient
        id="SVGID_1_"
        cx="10"
        cy="10"
        r="10.0161"
        gradientTransform="matrix(0.9968 0 0 1 3.215434e-02 0)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" style={{ stopColor: '#CCCCCC' }} />
        <stop offset="1" style={{ stopColor: '#8C8C8C' }} />
      </radialGradient>
      <path
        className={disable ? 'st1' : 'st2'}
        d="M18, 20H2c-1.1, 0-2-0.9-2-2V2c0-1.1, 0.9-2, 2-2h16c1.1, 0, 2, 0.9, 2, 2v16C20, 19.1, 19.1, 20, 18, 20z"
      />
      <polyline className="st10" points="16,7 10,13 4,7 " />
    </svg>
  );
};

export const DoubleVertButton = ({
  onClickUp,
  onClickDown,
  disable,
}: {
  onClickUp?: (event: React.MouseEvent<SVGPathElement>) => void;
  onClickDown?: (event: React.MouseEvent<SVGPathElement>) => void;
  disable?: boolean;
}): ReactElement => {
  return (
    <svg width="15" height="15" viewBox="0 0 20 20">
      <radialGradient
        id="SVGID_1_"
        cx="10"
        cy="10"
        r="10.0161"
        gradientTransform="matrix(0.9968 0 0 1 3.215434e-02 0)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" style={{ stopColor: '#CCCCCC' }} />
        <stop offset="1" style={{ stopColor: '#8C8C8C' }} />
      </radialGradient>
      <path
        className={disable ? 'st1' : 'st2'}
        d="M20,10V2c0-1.1-0.9-2-2-2H2C0.9,0,0,0.9,0,2v8H20z"
        onClick={disable ? null : onClickUp}
      />
      <path
        className={disable ? 'st1' : 'st2'}
        d="M18,20H2c-1.1,0-2-0.9-2-2V10H20V18C20,19.1,19.1,20,18,20z"
        onClick={disable ? null : onClickDown}
      />
      <polyline className="st10" points="16,7 10,3 4,7 " />
      <polyline className="st10" points="16,13 10,17 4,13 " />
    </svg>
  );
};
