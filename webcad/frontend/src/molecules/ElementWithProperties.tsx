import React from "react";
import { LabelCard } from "../atoms/LabelCard";
import { BrowseButton } from "../atoms/BrowseButton";

import "./ElementWithProperties.scss"

type ElementWithPropertiesProps = {
    name: string,
    isVisible: boolean,
    isLocked: boolean,
    isSelected: boolean,
    onClick: () => any
}

export class ElementWithProperties extends React.Component<ElementWithPropertiesProps, any> {
    constructor(props: ElementWithPropertiesProps) {
        super(props);
    }

    render() {
        return (
            <div className="element-wrapper">
                <LabelCard LabelName={this.props.name} selected={this.props.isSelected}/>
                <BrowseButton color={"red"} shape="circle" selected={this.props.isVisible} onClick={null} />
                <BrowseButton color={"green"} shape="circle" selected={this.props.isLocked} onClick={null} />
            </div>
        )
    }

};