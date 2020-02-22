import React, { ReactElement } from 'react';

import { TabCard } from '../atoms/TabCard';

import './TabCardGroup.scss';

export const TabCardGroup = ({
  tabs,
  selectedId,
}: {
  tabs: {
    id: number;
    name: string;
  }[];
  selectedId: number;
}): ReactElement => {
  return (
    <div className="TabCardGroup">
      {tabs.map((tab, id) => (
        <div key={tab.id} className="TagCard">
          <TabCard tagName={tab.name} selected={id === selectedId} />
        </div>
      ))}
    </div>
  );
};
