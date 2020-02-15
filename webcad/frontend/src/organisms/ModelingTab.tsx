import React from "react";
import { LabelCard } from "../atoms/LabelCard";
import { LabelBar } from "../atoms/atoms.stories";

import "./ModelingTab.scss"
import { TextBoxWithLabelAndButton, TextBoxWithLabelAndDoubleButton } from "../molecules/TextBoxWithLabel";
import { SelectBox } from "../molecules/SelectBox";
import { TagWithProperties } from "../molecules/TagWithProperties";
import { ElementWithProperties } from "../molecules/ElementWithProperties";

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
    curFilteredTagIndexes: number[],
    curFilteredElementIndexes: number[],

    tags: {
        id: number,
        name: string,
        color: "" | "blue" | "yellow" | "green" | "red",
        isEditable: boolean,
        isVisible: boolean,
        isLocked: boolean,
        isFiltered: boolean
    }[],
    elements: {
        id: number,
        name: string,
        tagId: number,
        isVisible: boolean,
        isLocked: boolean
    }[]
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
        const curFilteredElementIndexes = [] as number[];
        for (let i = 0; i < this.props.elements.length; i++) {
            curFilteredElementIndexes.push(i)
        }
        this.state = {
            curTagPresetIndex: 0,
            curSelectedTagIndexes: this.props.tagPresets[0].tag_ids,
            curFilteredTagIndexes: [],
            curFilteredElementIndexes: curFilteredElementIndexes,

            tags: this.props.tags,
            elements: this.props.elements
        };
        this.handleChangeTagPreset = this.handleChangeTagPreset.bind(this);
        this.handleClick = this.handleClick.bind(this)
    }

    handleChangeTagPreset(i: number) {
        this.setState({
            curTagPresetIndex: i,
            curSelectedTagIndexes: this.props.tagPresets[i].tag_ids
        })
    }

    handleClick(i: number) {
        let curFilteredTagIndexes = this.state.curFilteredTagIndexes;
        const curSelectedTagIndexes = this.state.curSelectedTagIndexes;
        let curFilteredElementIndexes = [] as number[];
        const indexOfFilteredTag = curFilteredTagIndexes.indexOf(i);
        const indexOfSelectedTag = curSelectedTagIndexes.indexOf(i);
        const tags = this.state.tags;

        if (indexOfSelectedTag !== -1) {
            if (indexOfFilteredTag === -1) {
                curSelectedTagIndexes.map(i => curFilteredTagIndexes.push(i))
            } else {
                curFilteredTagIndexes = curFilteredTagIndexes.filter(ti => curSelectedTagIndexes.indexOf(ti) === -1)
            }
        } else {
            if (indexOfFilteredTag === -1) {
                curFilteredTagIndexes.push(i)
            } else {
                curFilteredTagIndexes = curFilteredTagIndexes.filter(ti => ti !== i)
            }
        }

        tags.map(t => t.isFiltered = false);
        curFilteredTagIndexes.map(i => {
            tags[i].isFiltered = true
        });

        if (curFilteredTagIndexes.length === 0) {
            for (let i = 0; i < this.props.elements.length; i++) {
                curFilteredElementIndexes.push(i)
            }
        } else {
            const filteredElements = this.props.elements.filter(element => curFilteredTagIndexes.indexOf(element.tagId) !== -1);
            curFilteredElementIndexes = filteredElements.map(element => element.id);
        }

        this.setState({
            curFilteredTagIndexes: curFilteredTagIndexes,
            curFilteredElementIndexes: curFilteredElementIndexes,
            tags: tags
        })
    }
    
    render() {
        const tagPresetNames = this.props.tagPresets.map((t) => t.name);
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
                        {this.state.tags.map((tag, i) => {
                            // console.log(tag.isFiltered);
                            return (
                                <div key={i} className={this.state.curSelectedTagIndexes.indexOf(i) !== -1 ? "tag-selected" : ""}>
                                    <TagWithProperties name={tag.name}
                                                       color={tag.color}
                                                       isEditable={tag.isEditable}
                                                       isVisible={tag.isVisible}
                                                       isLocked={tag.isLocked}
                                                       isFiltered={tag.isFiltered}
                                                       onClick={() => this.handleClick(i)}/>
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
                        {this.state.elements.map((e, i) =>
                                <ElementWithProperties
                                    key={i}
                                    name={e.name}
                                    isVisible={e.isVisible}
                                    isLocked={e.isLocked}
                                    isSelected={this.state.curFilteredElementIndexes.indexOf(i) !== -1}
                                    onClick={null} />
                        )}
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