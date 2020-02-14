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

type BrowseButtonState = {
    /**
     * if selected
     */
    selected: boolean
}

export class BrowseButton extends React.Component<BrowseButtonProps, BrowseButtonState> {
    constructor(props: BrowseButtonProps) {
        super(props);
        this.state = {
            selected: this.props.selected
        }
    }

    render() {
        return (
            <div className={
                "browse-button " +
                (this.state.selected ? this.props.color : null) + " " + this.props.shape}
                 onClick={() => {
                     this.setState({selected: !this.state.selected});
                     this.props.onClick ? this.props.onClick() : null;
                     return false
                 }}/>
        )
    }
}