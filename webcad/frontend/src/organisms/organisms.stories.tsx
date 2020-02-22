import React, { ReactElement } from 'react';

import { ModelingTab } from './ModelingTab';
import { TagBrowser } from './TagBrowser';

export default { title: 'Organisms' };

export const DefaultModelingTab = (): ReactElement => <ModelingTab />;
export const DefaultBrowseModelingTab = (): ReactElement => (
  <TagBrowser
    tagPresets={[
      { id: 0, name: '', tagIds: [] },
      { id: 1, name: 'AAA', tagIds: [0, 1, 2] },
      { id: 2, name: 'BBB', tagIds: [0, 3, 4] },
    ]}
    tags={[
      {
        id: 0,
        name: 'aaa',
        color: 'green',
        isEditable: true,
        isFiltered: false,
        isLocked: true,
        isVisible: true,
      },
      {
        id: 1,
        name: 'bbb',
        color: 'green',
        isEditable: true,
        isFiltered: false,
        isLocked: true,
        isVisible: true,
      },
      {
        id: 2,
        name: 'ccc',
        color: 'green',
        isEditable: true,
        isFiltered: false,
        isLocked: true,
        isVisible: true,
      },
      {
        id: 3,
        name: 'ddd',
        color: 'yellow',
        isEditable: true,
        isFiltered: false,
        isLocked: true,
        isVisible: true,
      },
      {
        id: 4,
        name: 'eee',
        color: 'yellow',
        isEditable: true,
        isFiltered: false,
        isLocked: true,
        isVisible: true,
      },
    ]}
    elements={[
      { id: 0, name: 'abb1', tagIds: [0, 1], isVisible: true, isLocked: false },
      { id: 1, name: 'acc2', tagIds: [0, 2], isVisible: true, isLocked: true },
      { id: 2, name: 'aaa3', tagIds: [0], isVisible: true, isLocked: true },
      { id: 3, name: 'bbb1', tagIds: [1], isVisible: true, isLocked: true },
      { id: 4, name: 'cce1', tagIds: [2, 4], isVisible: true, isLocked: true },
    ]}
    curDir=""
    resources={[]}
  />
);
