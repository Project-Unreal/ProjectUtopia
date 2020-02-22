import React, { ReactElement } from 'react';
import { LabelCard } from '../atoms/LabelCard';
import { BrowseButton } from '../atoms/BrowseButton';

import './TagWithProperties.scss';

type TagWithPropertiesProps = {
  name: string;
  color: '' | 'blue' | 'yellow' | 'green' | 'red';
  isEditable: boolean;
  isVisible: boolean;
  isLocked: boolean;
  isFiltered: boolean;
  onEditableClick: () => boolean;
  onVisibleClick: () => boolean;
  onLockedClick: () => boolean;
  onFilteredClick: () => boolean;
};

export const TagWithProperties = ({
  name,
  color,
  isEditable,
  isVisible,
  isLocked,
  isFiltered,
  onEditableClick,
  onVisibleClick,
  onLockedClick,
  onFilteredClick,
}: TagWithPropertiesProps): ReactElement => {
  return (
    <div className="tag-wrapper">
      <LabelCard LabelName={name} />
      <BrowseButton
        color="blue"
        shape="square"
        selected={isEditable}
        onClick={onEditableClick}
      />
      <BrowseButton color={color} shape="square" selected onClick={null} />
      <BrowseButton
        color="red"
        shape="circle"
        selected={isVisible}
        onClick={onVisibleClick}
      />
      <BrowseButton
        color="green"
        shape="circle"
        selected={isLocked}
        onClick={onLockedClick}
      />
      <BrowseButton
        color="blue"
        shape="square"
        selected={isFiltered}
        onClick={onFilteredClick}
      />
    </div>
  );
};
