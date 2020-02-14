import React from "react";
import { LabelCard } from "../atoms/LabelCard";
import { BrowseButton } from "../atoms/BrowseButton";

import "./TagWithProperties.scss"

type TagWithPropertiesProps = {
    name: string,
    color: "" | "blue" | "yellow" | "green" | "red",
    isEditable: boolean,
    isVisible: boolean,
    isLocked: boolean,
    isFiltered: boolean
}

export const TagWithProperties = ({name, color, isEditable, isVisible, isLocked, isFiltered}: TagWithPropertiesProps) => {
    return (
        <div className="tag-wrapper">
            <LabelCard LabelName={name}/>
            <BrowseButton color={"blue"} shape="square" selected={isEditable} onClick={null} />
            <BrowseButton color={color} shape="square" selected={true} onClick={null} />
            <BrowseButton color={"red"} shape="circle" selected={isVisible} onClick={null} />
            <BrowseButton color={"green"} shape="circle" selected={isLocked} onClick={null} />
            <BrowseButton color={"blue"} shape="square" selected={isFiltered} onClick={null} />
        </div>
    )
};