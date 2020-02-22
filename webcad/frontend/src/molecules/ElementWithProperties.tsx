import React, { ReactElement } from 'react';
import { LabelCard } from '../atoms/LabelCard';
import { BrowseButton } from '../atoms/BrowseButton';

import './ElementWithProperties.scss';

type ElementWithPropertiesProps = {
  name: string;
  isVisible: boolean;
  isLocked: boolean;
  isSelected: boolean;
  onClick: () => void;
};

export const ElementWithProperties = ({
  name,
  isVisible,
  isLocked,
  isSelected,
  onClick,
}: ElementWithPropertiesProps): ReactElement => {
  return (
    <div className="element-wrapper">
      <LabelCard LabelName={name} selected={isSelected} />
      <BrowseButton
        color="red"
        shape="circle"
        selected={isVisible}
        onClick={onClick}
      />
      <BrowseButton
        color="green"
        shape="circle"
        selected={isLocked}
        onClick={onClick}
      />
    </div>
  );
};
