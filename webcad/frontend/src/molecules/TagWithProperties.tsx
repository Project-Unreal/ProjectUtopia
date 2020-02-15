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
    isFiltered: boolean,
    onClick: () => any
}

export class TagWithProperties extends React.Component<TagWithPropertiesProps, any> {
    constructor(props: TagWithPropertiesProps) {
        super(props);
    }

    render() {
        // console.log(this.props.isFiltered);
        return (
            <div className="tag-wrapper">
                <LabelCard LabelName={this.props.name}/>
                <BrowseButton color={"blue"} shape="square" selected={this.props.isEditable} onClick={null} />
                <BrowseButton color={this.props.color} shape="square" selected={true} onClick={null} />
                <BrowseButton color={"red"} shape="circle" selected={this.props.isVisible} onClick={null} />
                <BrowseButton color={"green"} shape="circle" selected={this.props.isLocked} onClick={null} />
                <BrowseButton color={"blue"} shape="square" selected={this.props.isFiltered} onClick={this.props.onClick} />
            </div>
        )
    }

};