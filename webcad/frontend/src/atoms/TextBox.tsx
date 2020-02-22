import React, { ReactElement } from 'react';

import './TextBox.scss';

export const TextBox = ({ text }: { text: string }): ReactElement => {
  return <div className="TextBox">{text}</div>;
};
