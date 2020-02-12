import React, { useEffect, useRef, useState } from "react";

import "./SelectBox.scss"
import { TextBox } from "../atoms/TextBox";
import { DoubleVertButton, SingleVertButton } from "../atoms/VertButton";

type SelectBoxProps = {
    selectList: string[],
    selected: number,
    onChange?: (value: string | number) => any
}

type SelectBoxState = {
    selected: number,
    showPullDown: boolean
}

export class SelectBox extends React.Component<SelectBoxProps, SelectBoxState> {

    constructor(props: SelectBoxProps) {
        super(props);
        this.state = {
            selected: this.props.selected,
            showPullDown: false
        };

        this.handleDropDown = this.handleDropDown.bind(this)
    }

    handleDropDown() {
        console.log(this.state.showPullDown);
        this.setState({showPullDown: !this.state.showPullDown})
    }

    render () {
        return (
            <div className="select-box"
                onBlur={() => this.handleDropDown()}
                onFocus={() => this.handleDropDown()}
                tabIndex={0}>
                <TextBox text={this.props.selectList[this.state.selected]}/>
                {this.state.showPullDown && (
                    <div className="select-content">
                        {this.props.selectList.map((s, i) => {
                            return <div className={i===this.state.selected ? "select-element selected" : "select-element"}
                                        key={i}
                                        onClick={() => {
                                            this.setState({selected: i});
                                            this.handleDropDown();
                                            return this.props.onChange ? this.props.onChange(i) : null
                                        }}>
                                    {this.props.selectList[i]}
                            </div>
                        })}
                    </div>
                )}
                <div className="select-button"><SingleVertButton onClick={() => this.handleDropDown()} /></div>
            </div>
        )
    }
}