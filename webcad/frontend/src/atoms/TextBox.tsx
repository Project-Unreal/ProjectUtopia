import React from "react";

import "./TextBox.scss"

type TextBoxProps = {
    text: string,
    onChange?: (value: string) => any
}

type TextBoxState = {
    text: string
}

export class EditableTextBox extends React.Component<TextBoxProps, TextBoxState> {
    private input: HTMLInputElement | null = null;
    constructor(props: TextBoxProps) {
        super(props);
        this.state = {
            text: this.props.text
        };
    }

    render () {
        return (
            <input
                className="TextBox"
                ref={(input) => this.input = input}
                value={this.state.text}
                onChange={(e) => {
                    this.setState({text: e.target.value});
                    this.props.onChange? this.props.onChange(e.target.value) : null}}
            />
        )
    }
}

export const TextBox = ({text}: {text: string}) => {
    return <div className="TextBox">{ text }</div>
};