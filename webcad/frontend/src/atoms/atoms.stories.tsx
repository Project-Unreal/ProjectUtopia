import React, { ReactElement } from 'react';

import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { TabCard } from './TabCard';
import { LabelCard } from './LabelCard';
import { MainLabelBar } from './MainLabelBar';
import { TextBox } from './TextBox';
import { DoubleVertButton, SingleVertButton } from './VertButton';
import { BrowseButton } from './BrowseButton';
import { TextButton } from './TextButton';
import { ToggleButton } from './ToggleButton';
import { Compass } from './Compass';

export default { title: 'Atoms', decorators: [withKnobs] };

export const TabCardWithText = (): ReactElement => (
  <TabCard tagName="Example" selected={false} />
);
export const SelectedTabCardWithText = (): ReactElement => (
  <TabCard tagName="Example" selected />
);
export const ExampleLabel = (): ReactElement => (
  <LabelCard
    LabelName="Example"
    onClick={(): boolean => {
      action('Clicked.');
      return true;
    }}
  />
);
export const ExampleTextBox = (): ReactElement => <TextBox text="Example" />;
export const ExampleEditableTextBox = (): ReactElement => (
  <TextBox text="Example" editable />
);

export const LabelBar = (): ReactElement => <MainLabelBar />;
export const ActiveDoubleVertButton = (): ReactElement => (
  <DoubleVertButton
    onClickUp={action('Click Up.')}
    onClickDown={action('Click Down.')}
    disable={boolean('Disabled', false)}
  />
);
export const DisabledDoubleVertButton = (): ReactElement => (
  <DoubleVertButton disable />
);
export const ActiveSingleVertButton = (): ReactElement => (
  <SingleVertButton onClick={action('Clicked.')} />
);

export const ExampleBrowseButton = (): ReactElement => {
  const shape = select('shape', ['circle', 'square'], 'circle');
  const color = select('color', ['', 'blue', 'yellow', 'red', 'green'], 'blue');
  const selected = select('selected', ['false', 'true'], 'true');
  return (
    <BrowseButton
      onClick={action('Clicked')}
      shape={shape}
      selected={selected === 'true'}
      color={color}
    />
  );
};

export const ExampleTextButton = (): ReactElement => (
  <TextButton text={select('text', ['S', 'R', 'A', 'D'], 'S')} onClick={null} />
);

export const ExampleToggleButton = (): ReactElement => (
  <ToggleButton
    selected={select('selected', ['false', 'true'], 'true') === 'true'}
  />
);

export const ExampleCompass = (): ReactElement => (
  <Compass onRotateStart={() => console.log('START')} />
);
