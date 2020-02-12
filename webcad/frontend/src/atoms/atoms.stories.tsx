import React from 'react';

import { TabCard } from "./TabCard";
import { LabelCard } from "./LabelCard";
import { MainLabelBar } from "./MainLabelBar";
import { TextBox } from "./TextBox";
import { DoubleVertButton, SingleVertButton } from "./VertButton";
import { BrowseButton } from "./BrowseButton";

import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default { title: 'Atoms', decorators: [withKnobs] };

export const TabCardWithText = () => <TabCard tagName={"Example"} selected={false}/>;
export const SelectedTabCardWithText = () => <TabCard tagName={"Example"} selected={true}/>;
export const ExampleLabel = () => <LabelCard LabelName={"Example"}/>;
export const ExampleTextBox = () => <TextBox text={"Example"}/>;

export const LabelBar = () => <MainLabelBar/>;
export const ActiveDoubleVertButton = () => <DoubleVertButton onClickUp={action("Click Up.")}
                                                              onClickDown={action("Click Down.")}
                                                              disable={boolean("Disabled", false)}/>;
export const DisabledDoubleVertButton = () => <DoubleVertButton disable />;
export const ActiveSingleVertButton = () => <SingleVertButton onClick={action("Clicked.")}/>;

export const ExampleBrowseButton = () => {
    const shape = select("shape", ["circle", "square"], "circle")
    const color = select("color", ["", "blue", "yellow", "red", "green"], "blue");
    const selected = select("selected", ["false", "true"], "true");
    return <BrowseButton onClick={action("Clicked")}
                         shape={shape}
                         selected={selected === "true"}
                         color={color} />
};