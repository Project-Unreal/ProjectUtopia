import React, { ReactElement } from 'react';

import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { TabCardGroup } from './TabCardGroup';
import {
  TextBoxWithLabel,
  TextBoxWithLabelAndButton,
} from './TextBoxWithLabel';
import { SelectBox } from './SelectBox';

import { TagWithProperties } from './TagWithProperties';
import { NumberBox } from './NumberBox';

export default { title: 'Molecules', decorators: [withKnobs] };

export const TabCardGroupWithExampleTabs = (): ReactElement => (
  <TabCardGroup
    tabs={[
      { id: 0, name: 'example1' },
      { id: 1, name: 'example2' },
    ]}
    selectedId={1}
  />
);
export const ExampleTextBoxWithLabel = (): ReactElement => (
  <TextBoxWithLabel label="example" text="example" />
);
export const ExampleTextBoxWithLabelAndSingleButton = (): ReactElement => (
  <TextBoxWithLabelAndButton label="example" text="example" />
);
export const ExampleSelectBox = (): ReactElement => (
  <SelectBox
    selectList={[
      { id: 0, name: 'example1' },
      { id: 1, name: 'example2' },
    ]}
    selectedId={0}
    onChange={(i): boolean => {
      action(i.toString());
      return true;
    }}
    editable
  />
);
export const ExampleTagWithProperties = (): ReactElement => (
  <TagWithProperties
    name="1stfloor"
    color="yellow"
    isEditable
    isVisible
    isLocked
    isFiltered={false}
    onTagClick={(): boolean => true}
    onLockedClick={null}
    onEditableClick={null}
    onVisibleClick={null}
    onFilteredClick={null}
  />
);
export const ExampleNumberBox = (): ReactElement => (
  <NumberBox label="Number" initial={10.0} delta={2.5} />
);
