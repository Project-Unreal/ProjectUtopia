import React from "react";
import { LabelCard } from "../atoms/LabelCard";
import { LabelBar } from "../atoms/atoms.stories";

import "./ModelingTab.scss"
import { TextBoxWithLabelAndButton, TextBoxWithLabelAndDoubleButton } from "../molecules/TextBoxWithLabel";
import { SelectBox } from "../molecules/SelectBox";
import { TagWithProperties } from "../molecules/TagWithProperties";

type TagBrowserProps = {
    /**
     * list of tag presets
     */
    tagPresets: {
        name: string,
        tag_ids: number[]
    }[],
    /**
     * list of tags
     */
    tags: {
        id: number,
        name: string,
        color: "" | "blue" | "yellow" | "green" | "red",
        isEditable: boolean,
        isVisible: boolean,
        isLocked: boolean,
        isFiltered: boolean
    }[],
    /**
     * list of elements
     */
    elements: {
        id: number,
        name: string,
        tagId: number,
        isVisible: boolean,
        isLocked: boolean
    }[],
    /**
     * current directory
     */
    curDir: string,
    /**
     * list of resources
     */
    resources: {
        id: number,
        name: string,
        type: string,
        updated: Date,
        user: string
    }[]
}

type TagBrowserState = {
    curTagPresetIndex: number,
    curSelectedTagIndexes: number[],
}

type ElementBrowserProps = {
    elements: {
        id: number,
        name: number,
        tagId: number,
        isVisible: boolean,
        isLocked: boolean,
    }[]
}

export class TagBrowser extends React.Component<TagBrowserProps, TagBrowserState> {
    constructor(props: TagBrowserProps) {
        super(props);
        this.state = {
            curTagPresetIndex: 0,
            curSelectedTagIndexes: this.props.tagPresets[0].tag_ids,
        };
        this.handleChangeTagPreset = this.handleChangeTagPreset.bind(this)
    }

    handleChangeTagPreset(i: number) {
        this.setState({
            curTagPresetIndex: i,
            curSelectedTagIndexes: this.props.tagPresets[i].tag_ids
        })
    }
    
    render() {
        const tagPresetNames = this.props.tagPresets.map((t) => t.name);
        const filteredTagIds = this.props.tags.filter(tag => tag.isFiltered === true).map(tag => tag.id);
        const filteredElements = this.props.elements.filter(element => filteredTagIds.indexOf(element.tagId) !== -1);
        return (
            <div className="tag-browser">
                <div className="tag-preset">
                    <div className="label"><LabelCard LabelName="Tag preset"/></div>
                    <div className="tag-preset-select-box">
                    <SelectBox selectList={tagPresetNames}
                               selected={this.state.curTagPresetIndex}
                               onChange={this.handleChangeTagPreset}
                    /></div>
                </div>
                    <div className="tables">
                    <div className="tag-table">
                        <div className="tag-header-wrapper">
                            <div className="tag">Tag</div>
                            <div>E</div>
                            <div>C</div>
                            <div>V</div>
                            <div>L</div>
                            <div>F</div>
                        </div>
                        {this.props.tags.map((tag, i) => {
                            return (
                                <div key={i} className={this.state.curSelectedTagIndexes.indexOf(i) !== -1 ? "tag-selected" : ""}>
                                    <TagWithProperties name={tag.name} color={tag.color} isEditable={tag.isEditable} isVisible={tag.isVisible} isLocked={tag.isLocked} isFiltered={tag.isFiltered}/>
                                </div>
                            )
                        })}
                    </div>
                    <div className="element-table">
                        <div className="element-header-wrapper">
                            <div className="element">Element</div>
                            <div>V</div>
                            <div>L</div>
                        </div>
                        {this.props.elements.map((element, i) => {
                            return (
                                <div key={i} className={filteredElements.indexOf(element) === -1 ? "element-unselected" : ""}>{element.name}</div>
                            )
                        })}
                    </div>
                </div>

            </div>
        )
    }
}

export class ResourceBrowser extends React.Component<any, any> {

}

export class ModelingTab extends React.Component<any, any> {
    render() {
        return (
            <div className="modeling-tab">
                <div className="element-label-card"><LabelCard LabelName="Element"/></div>
                <div className="element-label-bar"><LabelBar/></div>
                <div>
                    <div className="position-label-card"><LabelCard LabelName="Position"/></div>
                    <div className="positions">
                        <div className="position-X"><TextBoxWithLabelAndDoubleButton label="X" text="1820.00"/></div>
                        <div className="position-X"><TextBoxWithLabelAndDoubleButton label="Y" text="1820.00"/></div>
                        <div className="position-X"><TextBoxWithLabelAndDoubleButton label="Z" text="4000.00"/></div>
                    </div>
                </div>
                <LabelCard LabelName="Global tags"/>
                <div>
                    <div>
                        <TextBoxWithLabelAndButton label="Type" text="D-Vertex"/>
                        <TextBoxWithLabelAndButton label="Author" text="Issen"/>
                    </div>
                    <div>
                        <TextBoxWithLabelAndButton label="Update" text="2012.12.01"/>
                        <TextBoxWithLabelAndButton label="Approve" text="A. Tadao"/>
                    </div>
                </div>
                <LabelCard LabelName="Common tags"/>

            </div>
        );
    }
}