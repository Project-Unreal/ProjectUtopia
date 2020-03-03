import React, { ReactElement } from 'react';
import { LabelCard } from '../atoms/LabelCard';
import { ToggleButton } from '../atoms/ToggleButton';

import './ElementWithProperties.scss';

type ElementWithPropertiesProps = {
  name: string;
  isVisible: boolean;
  isLocked: boolean;
  isSelected: boolean;
  onVisibleClick?: (e: React.MouseEvent) => void;
  onLockedClick?: (e: React.MouseEvent) => void;
};

export const ElementWithProperties = ({
  name,
  isVisible,
  isLocked,
  isSelected,
  onVisibleClick,
  onLockedClick,
}: ElementWithPropertiesProps): ReactElement => {
  return (
    <div className="element-wrapper">
      <LabelCard LabelName={name} selected={isSelected} />
      <ToggleButton selected={isVisible} onClick={onVisibleClick} />
      <ToggleButton selected={isLocked} onClick={onLockedClick} />
    </div>
  );
};
