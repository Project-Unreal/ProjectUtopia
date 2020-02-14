import React from 'react';

import { TabCardGroup } from "./TabCardGroup";
import { TextBoxWithLabel, TextBoxWithLabelAndButton, TextBoxWithLabelAndDoubleButton } from "./TextBoxWithLabel";
import { SelectBox } from "./SelectBox";

import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { TagWithProperties } from "./TagWithProperties";

export default { title: 'Molecules', decorators: [withKnobs] };


export const TabCardGroupWithExampleTabs = () => <TabCardGroup tabs={["example1", "example2"]} selected_id={1}/>;
export const ExampleTextBoxWithLabel = () => <TextBoxWithLabel label={"example"} text={"example"} />;
export const ExampleTextBoxWithLabelAndSingleButton = () => <TextBoxWithLabelAndButton label={"example"} text={"example"} />;
export const ExampleTextBoxWithLabelAndDoubleButton = () => <TextBoxWithLabelAndDoubleButton label={"example"} text={"example"} />;
export const ExampleSelectBox = () => <SelectBox selectList={["example1", "example2"]} selected={0} onChange={(i) => console.log(i.toString())} />;
export const ExampleTagWithProperties = () => <TagWithProperties name="1stfloor" color="yellow" isEditable={true} isVisible={true} isLocked={true} isFiltered={false}/>;