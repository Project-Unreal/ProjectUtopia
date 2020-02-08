import React from "react";
import { LabelCard } from "../atoms/LabelCard";
import { TextBox } from "../atoms/TextBox";

import "./TextBoxWithLabel.scss"
import { DoubleVertButton, SingleVertButton } from "../atoms/VertButton";

type TextBoxProps = {
    label: string,
    text: string,
    onChange?: (value: string) => any
}

type TextBoxState = {
    text: string
}

export class TextBoxWithLabel extends React.Component<TextBoxProps, TextBoxState> {
    private input: HTMLInputElement | null = null;
    constructor(props: TextBoxProps) {
        super(props);
        this.state = {
            text: this.props.text
        }
    }

    render() {
        return (
            <>
                <LabelCard LabelName={this.props.label} />
                <div className="text-box-stands-aside-label"><TextBox text={this.props.text} /></div>
            </>
        )
    }
}

export class TextBoxWithLabelAndButton extends React.Component<TextBoxProps, TextBoxState> {
    private input: HTMLInputElement | null = null;
    constructor(props: TextBoxProps) {
        super(props);
        this.state = {
            text: this.props.text
        }
    }

    render() {
        return (
            <>
                <LabelCard LabelName={this.props.label} />
                <div className="text-box-stands-aside-label"><TextBox text={this.props.text} /></div>
                <div className="text-box-button"><SingleVertButton/></div>
            </>
        )
    }
}

export class TextBoxWithLabelAndDoubleButton extends React.Component<TextBoxProps, TextBoxState> {
    private input: HTMLInputElement | null = null;
    constructor(props: TextBoxProps) {
        super(props);
        this.state = {
            text: this.props.text
        }
    }

    render() {
        return (
            <>
                <LabelCard LabelName={this.props.label} />
                <div className="text-box-stands-aside-label"><TextBox text={this.props.text} /></div>
                <div className="text-box-button"><DoubleVertButton/></div>
            </>
        )
    }
}