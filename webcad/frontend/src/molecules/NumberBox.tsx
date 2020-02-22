import React, { ReactElement, useState } from 'react';
import { LabelCard } from '../atoms/LabelCard';
import { TextBox } from '../atoms/TextBox';
import { DoubleVertButton } from '../atoms/VertButton';

import './NumberBox.scss';

export const NumberBox = ({
  label,
  initial,
  delta,
}: {
  label: string;
  initial: number;
  delta: number;
}): ReactElement => {
  const [num, setNum] = useState(initial);

  return (
    <div className="number-box">
      <LabelCard LabelName={label} />
      <div className="number-box-stands-aside-label">
        <TextBox text={num.toString()} />
      </div>
      <div className="number-box-button">
        <DoubleVertButton
          onClickUp={(): void => setNum(num + delta)}
          onClickDown={(): void => setNum(num - delta)}
        />
      </div>
    </div>
  );
};
