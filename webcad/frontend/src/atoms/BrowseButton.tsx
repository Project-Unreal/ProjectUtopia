import React from "react";

import "./BrowseButton.scss"

type BrowseButtonProps = {
    /**
     * Browse button color
     * @default ""
     */
    color: "" | "blue" | "yellow" | "green" | "red",
    /**
     * circle or square
     * @default circle
     */
    shape: "square" | "circle",
    /**
     * if selected
     * @default true
     */
    selected: boolean,
    /**
     * onClick event
     * @default null
     */
    onClick: (event?: React.MouseEvent<HTMLDivElement>) => any
}

export const BrowseButton = (props: BrowseButtonProps) => <div className={"browse-button " + (props.selected ? props.color : "") + " " + props.shape} onClick={props.onClick} />;