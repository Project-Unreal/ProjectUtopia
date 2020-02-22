import React, { ReactElement } from 'react';

import './TabCard.scss';

export const TabCard = ({
  tagName,
  selected,
}: {
  tagName: string;
  selected: boolean;
}): ReactElement => {
  return (
    <div className={selected ? 'tab-card-selected' : 'tab-card'}>{tagName}</div>
  );
};
