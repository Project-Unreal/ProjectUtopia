import React from 'react';

import { TabCardGroup } from "./TabCardGroup";
import { TextBoxWithLabel, TextBoxWithLabelAndButton, TextBoxWithLabelAndDoubleButton } from "./TextBoxWithLabel";
import { SelectBox } from "./SelectBox";

export default { title: 'Molecules' };

export const TabCardGroupWithExampleTabs = () => <TabCardGroup tabs={["example1", "example2"]} selected_id={1}/>;
export const ExampleTextBoxWithLabel = () => <TextBoxWithLabel label={"example"} text={"example"} />;
export const ExampleTextBoxWithLabelAndSingleButton = () => <TextBoxWithLabelAndButton label={"example"} text={"example"} />;
export const ExampleTextBoxWithLabelAndDoubleButton = () => <TextBoxWithLabelAndDoubleButton label={"example"} text={"example"} />;
export const ExampleSelectBox = () => <SelectBox selectList={["example1", "example2"]} selected={0} />;