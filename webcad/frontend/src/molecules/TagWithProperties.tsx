import React, { ReactElement } from 'react';
import { LabelCard } from '../atoms/LabelCard';
import { BrowseButton } from '../atoms/BrowseButton';

import './TagWithProperties.scss';
import { ToggleButton } from '../atoms/ToggleButton';

type TagWithPropertiesProps = {
  name: string;
  color: '' | 'blue' | 'yellow' | 'green' | 'red';
  isEditable: boolean;
  isVisible: boolean;
  isLocked: boolean;
  isFiltered: boolean;
  onTagClick: (e: React.MouseEvent) => boolean;
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
  onTagClick,
  onEditableClick,
  onVisibleClick,
  onLockedClick,
  onFilteredClick,
}: TagWithPropertiesProps): ReactElement => {
  return (
    <div className="tag-wrapper">
      <LabelCard LabelName={name} onClick={onTagClick} />
      <BrowseButton color={color} shape="square" selected onClick={null} />
      <ToggleButton selected={isEditable} onClick={onEditableClick} />
      <ToggleButton selected={isVisible} onClick={onVisibleClick} />
      <ToggleButton selected={isLocked} onClick={onLockedClick} />
      <ToggleButton selected={isFiltered} onClick={onFilteredClick} />
    </div>
  );
};
