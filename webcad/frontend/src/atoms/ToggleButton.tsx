import React, { ReactElement } from 'react';

import './ToggleButton.scss'

type ToggleButtonProps = {
  selected?: boolean;
  onClick?: (event?: React.MouseEvent<HTMLDivElement>) => void;
};

export const ToggleButton = ({
  selected,
  onClick,
}: ToggleButtonProps): ReactElement => (
  <div
    className={`toggle-button ${selected ? 'selected' : ''}`}
    role="checkbox"
    aria-checked={selected}
    onClick={onClick}
    onKeyPress={null}
    tabIndex={-1}
    aria-label="toggle-button"
  />
);
