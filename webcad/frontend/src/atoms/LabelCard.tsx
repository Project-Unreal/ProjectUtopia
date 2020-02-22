import React, { ReactElement } from 'react';

import './LabelCard.scss';

export const LabelCard = ({
  LabelName,
  selected = true,
}: {
  LabelName: string;
  selected?: boolean;
}): ReactElement => {
  return (
    <>
      <div className={`label-card ${selected ? '' : 'unselected'}`}>
        {LabelName}
      </div>
    </>
  );
};
