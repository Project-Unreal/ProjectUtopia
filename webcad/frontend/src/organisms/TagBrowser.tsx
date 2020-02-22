import React, { ReactElement } from 'react';
import { LabelCard } from '../atoms/LabelCard';
import { SelectBox } from '../molecules/SelectBox';
import { TextButton } from '../atoms/TextButton';
import { TagWithProperties } from '../molecules/TagWithProperties';
import { ElementWithProperties } from '../molecules/ElementWithProperties';

type tag = {
  id: number;
  name: string;
  color: '' | 'blue' | 'yellow' | 'green' | 'red';
  isEditable: boolean;
  isVisible: boolean;
  isLocked: boolean;
  isFiltered: boolean;
};

type element = {
  id: number;
  name: string;
  tagIds: number[];
  isVisible: boolean;
  isLocked: boolean;
};

type TagBrowserProps = {
  /**
   * list of tag presets
   */
  tagPresets: {
    id: number;
    name: string;
    tagIds: number[];
  }[];
  /**
   * list of tags
   */
  tags: tag[];
  /**
   * list of elements
   */
  elements: element[];
  /**
   * current directory
   */
  curDir: string;
  /**
   * list of resources
   */
  resources: {
    id: number;
    name: string;
    type: string;
    updated: Date;
    user: string;
  }[];
};

type TagBrowserState = {
  curTagPresetId: number;

  isSPressed: boolean;
  isAPressed: boolean;
  isRPressed: boolean;
  isDPressed: boolean;

  tags: tag[];
  elements: element[];
};

export class TagBrowser extends React.Component<
  TagBrowserProps,
  TagBrowserState
> {
  constructor(props: TagBrowserProps) {
    super(props);
    const curFilteredElementIndexes = [] as number[];
    const { elements, tags } = this.props;
    for (let i = 0; i < elements.length; i += 1) {
      curFilteredElementIndexes.push(i);
    }
    this.state = {
      curTagPresetId: 0,
      tags,
      elements,

      isSPressed: false,
      isAPressed: false,
      isRPressed: false,
      isDPressed: false,
    };
    this.handleChangeTagPreset = this.handleChangeTagPreset.bind(this);
    this.handleTagClick = this.handleTagClick.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleChangeTagPreset(i: number): boolean {
    this.setState({
      curTagPresetId: i,
    });
    return true;
  }

  handleTagClick(
    id: number,
    mode: 'isEditable' | 'isVisible' | 'isLocked' | 'isFiltered',
  ): boolean {
    const { tags, curTagPresetId } = this.state;
    const { tagPresets } = this.props;

    const curTagPreset = tagPresets.find(tp => tp.id === curTagPresetId);
    const updateTags = (): tag[] => {
      const updateModeTo = !tags.find(t => t.id === id)[mode];
      const updateTagIds =
        curTagPreset.tagIds.indexOf(id) === -1 ? [id] : curTagPreset.tagIds;

      return tags.map(t => {
        const newT = t;
        if (updateTagIds.indexOf(t.id) !== -1) newT[mode] = updateModeTo;
        return newT;
      });
    };

    this.setState({
      tags: updateTags(),
    });
    return true;
  }

  handleSelect(): boolean {
    const { isSPressed } = this.state;
    this.setState({
      isSPressed: !isSPressed,
      isAPressed: false,
      isRPressed: false,
      isDPressed: false,
    });
    return true;
  }

  handleAdd(): boolean {
    const { isAPressed } = this.state;
    this.setState({
      isSPressed: false,
      isAPressed: !isAPressed,
      isRPressed: false,
      isDPressed: false,
    });
    return true;
  }

  handleRemove(): boolean {
    const { isRPressed } = this.state;
    this.setState({
      isSPressed: false,
      isAPressed: false,
      isRPressed: !isRPressed,
      isDPressed: false,
    });
    return true;
  }

  handleDelete(): boolean {
    const { isDPressed } = this.state;
    this.setState({
      isSPressed: false,
      isAPressed: false,
      isRPressed: false,
      isDPressed: !isDPressed,
    });
    return true;
  }

  render(): ReactElement {
    const { tagPresets } = this.props;
    const { tags, elements, curTagPresetId } = this.state;

    const tagPresetNames = tagPresets.map(t => {
      return { id: t.id, name: t.name };
    });

    const curSelectedTagIds = [
      ...new Set(
        tagPresets
          .find(tp => tp.id === curTagPresetId)
          .tagIds.reduce((ids, tIds) => ids.concat(tIds), [] as number[]),
      ),
    ];

    const curFilteredTagIds = tags.filter(t => t.isFiltered).map(t => t.id);

    const curFilteredElementIds =
      tags.filter(t => t.isFiltered).length === 0
        ? elements.map(e => e.id)
        : elements
            .filter(e =>
              e.tagIds.reduce(
                (isFiltered, ti) =>
                  isFiltered || curFilteredTagIds.indexOf(ti) !== -1,
                false,
              ),
            )
            .map(e => e.id);

    return (
      <div className="tag-browser">
        <div className="tag-preset">
          <div className="label">
            <LabelCard LabelName="Tag preset" />
          </div>
          <div className="tag-preset-select-box">
            <SelectBox
              selectList={tagPresetNames}
              selected={curTagPresetId}
              onChange={this.handleChangeTagPreset}
            />
          </div>
          <div className="tag-preset-button">
            <TextButton text="S" onClick={(): boolean => this.handleSelect()} />
          </div>
          <div className="tag-preset-button">
            <TextButton text="A" onClick={(): boolean => this.handleAdd()} />
          </div>
          <div className="tag-preset-button">
            <TextButton text="R" onClick={(): boolean => this.handleRemove()} />
          </div>
          <div className="tag-preset-button">
            <TextButton text="D" onClick={(): boolean => this.handleDelete()} />
          </div>
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
            {tags.map(t => {
              return (
                <div
                  key={t.id}
                  className={
                    curSelectedTagIds.indexOf(t.id) !== -1 ? 'tag-selected' : ''
                  }
                >
                  <TagWithProperties
                    name={t.name}
                    color={t.color}
                    isEditable={t.isEditable}
                    isVisible={t.isVisible}
                    isLocked={t.isLocked}
                    isFiltered={curFilteredTagIds.indexOf(t.id) !== -1}
                    onEditableClick={(): boolean =>
                      this.handleTagClick(t.id, 'isEditable')
                    }
                    onVisibleClick={(): boolean =>
                      this.handleTagClick(t.id, 'isVisible')
                    }
                    onLockedClick={(): boolean =>
                      this.handleTagClick(t.id, 'isLocked')
                    }
                    onFilteredClick={(): boolean =>
                      this.handleTagClick(t.id, 'isFiltered')
                    }
                  />
                </div>
              );
            })}
          </div>
          <div className="element-table">
            <div className="element-header-wrapper">
              <div className="element">Element</div>
              <div>V</div>
              <div>L</div>
            </div>
            {elements.map((e, i) => (
              <ElementWithProperties
                key={e.id}
                name={e.name}
                isVisible={e.isVisible}
                isLocked={e.isLocked}
                isSelected={curFilteredElementIds.indexOf(i) !== -1}
                onClick={null}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
