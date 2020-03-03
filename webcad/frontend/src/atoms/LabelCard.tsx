import React, { ReactElement } from 'react';

import './LabelCard.scss';

export const LabelCard = ({
  LabelName,
  onClick = null,
  selected = true,
}: {
  LabelName: string;
  onClick?: (e: React.MouseEvent) => boolean;
  selected?: boolean;
}): ReactElement => {
  return (
    <div
      role="button"
      className={`label-card ${selected ? '' : 'unselected'}`}
      tabIndex={-1}
      onKeyPress={null}
      onClick={onClick}
    >
      {LabelName}
    </div>
  );
};
