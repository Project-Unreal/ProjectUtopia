import React, { ReactElement } from 'react';

import './BrowseButton.scss';

type BrowseButtonProps = {
  /**
   * Browse button color
   * @default ""
   */
  color: '' | 'blue' | 'yellow' | 'green' | 'red';
  /**
   * circle or square
   * @default circle
   */
  shape: 'square' | 'circle';
  /**
   * if selected
   * @default true
   */
  selected: boolean;
  /**
   * onClick event
   * @default null
   */
  onClick: (event?: React.MouseEvent<HTMLDivElement>) => void;
};

export const BrowseButton = ({
  color,
  selected,
  shape,
  onClick,
}: BrowseButtonProps): ReactElement => (
  <div
    className={`browse-button ${selected ? color : ''} ${shape}`}
    role="checkbox"
    aria-checked={selected}
    onClick={onClick}
    onKeyPress={null}
    tabIndex={-1}
    aria-label="browse-button"
  />
);
