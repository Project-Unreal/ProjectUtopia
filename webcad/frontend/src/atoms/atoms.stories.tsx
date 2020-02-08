import React from 'react';

import { TabCard } from "./TabCard";
import { LabelCard } from "./LabelCard";
import { MainLabelBar } from "./MainLabelBar";
import { TextBox } from "./TextBox";
import { DoubleVertButton, SingleVertButton } from "./VertButton";

export default { title: 'Atoms' };

export const TabCardWithText = () => <TabCard tagName={"Example"} selected={false}/>;
export const SelectedTabCardWithText = () => <TabCard tagName={"Example"} selected={true}/>;
export const ExampleLabel = () => <LabelCard LabelName={"Example"}/>;
export const ExampleTextBox = () => <TextBox text={"Example"}/>;

export const LabelBar = () => <MainLabelBar/>;
export const ActiveDoubleVertButton = () => <DoubleVertButton/>;
export const ActiveSingleVertButton = () => <SingleVertButton/>;