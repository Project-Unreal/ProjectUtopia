import React, { ReactElement } from 'react';

import './TextButton.scss';

type TextButtonProps = {
  text: string;
  onClick: (event?: React.MouseEvent<HTMLDivElement>) => void;
};

export const TextButton = ({
  text,
  onClick,
}: TextButtonProps): ReactElement => (
  <div
    className="text-button"
    role="button"
    tabIndex={-1}
    onClick={onClick}
    onKeyPress={null}
  >
    {text}
  </div>
);
