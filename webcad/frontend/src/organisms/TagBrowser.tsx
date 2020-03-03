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

type tagPreset = {
  id: number;
  name: string;
  tagIds: number[];
};

type TagBrowserProps = {
  /**
   * list of tag presets
   */
  tagPresets: tagPreset[];
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
  tagPresets: tagPreset[];
  tags: tag[];
  elements: element[];

  curSelectedTagIds: number[];

  isInsertPressed: boolean;
  isRemovePressed: boolean;
};

export class TagBrowser extends React.Component<
  TagBrowserProps,
  TagBrowserState
> {
  private readonly tagPresetRef: React.RefObject<SelectBox>;

  constructor(props: TagBrowserProps) {
    super(props);
    const curFilteredElementIndexes = [] as number[];
    const { elements, tags, tagPresets } = this.props;
    for (let i = 0; i < elements.length; i += 1) {
      curFilteredElementIndexes.push(i);
    }
    this.tagPresetRef = React.createRef();
    this.state = {
      curTagPresetId: 0,
      tagPresets,
      tags,
      elements,

      curSelectedTagIds: [],

      isRemovePressed: false,
      isInsertPressed: false,
    };
    this.handleChangeTagPreset = this.handleChangeTagPreset.bind(this);
    this.handleTagModeClick = this.handleTagModeClick.bind(this);
    this.handleTagDelete = this.handleTagDelete.bind(this);
    this.handleTagCreatePrepare = this.handleTagCreatePrepare.bind(this);

    this.handlePressInsert = this.handlePressInsert.bind(this);
    this.handlePressRemove = this.handlePressRemove.bind(this);
  }

  handleChangeTagPreset(i: number): boolean {
    const { tagPresets } = this.props;
    this.setState({
      curTagPresetId: i,
      curSelectedTagIds: Array.from(tagPresets.find(tp => tp.id === i).tagIds),
    });
    return true;
  }

  handleTagModeClick(
    id: number,
    mode: 'isEditable' | 'isVisible' | 'isLocked' | 'isFiltered',
  ): boolean {
    const { tags, curTagPresetId, tagPresets } = this.state;

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

  handlePressInsert(): boolean {
    this.setState({
      isRemovePressed: false,
      isInsertPressed: true,
    });
    return true;
  }

  handlePressRemove(): boolean {
    this.setState({
      isRemovePressed: true,
      isInsertPressed: false,
    });
    return true;
  }

  handleTagLabelClick(event: React.MouseEvent, tagId: number): boolean {
    const { isInsertPressed, isRemovePressed } = this.state;
    const { curTagPresetId, tagPresets } = this.state;
    const newTagPreset = tagPresets.find(tp => tp.id === curTagPresetId);

    if (isInsertPressed) {
      if (newTagPreset.tagIds.indexOf(tagId) === -1)
        newTagPreset.tagIds.push(tagId);

      this.setState({
        tagPresets: tagPresets.map(tp =>
          tp.id === newTagPreset.id ? newTagPreset : tp,
        ),
        isInsertPressed: false,
      });
    } else if (isRemovePressed) {
      if (newTagPreset.tagIds.indexOf(tagId) !== -1)
        newTagPreset.tagIds = newTagPreset.tagIds.filter(i => i !== tagId);

      this.setState({
        tagPresets: tagPresets.map(tp =>
          tp.id === newTagPreset.id ? newTagPreset : tp,
        ),
        isRemovePressed: false,
      });
    } else if (event.ctrlKey) {
      const { curSelectedTagIds } = this.state;
      if (curSelectedTagIds.indexOf(tagId) === -1) {
        const newSelectedTagIds = curSelectedTagIds;
        newSelectedTagIds.push(tagId);
        this.tagPresetRef.current.handleClear();
        this.setState({
          curTagPresetId: 0,
          curSelectedTagIds: newSelectedTagIds,
        });
      } else {
        this.tagPresetRef.current.handleClear();
        this.setState({
          curTagPresetId: 0,
          curSelectedTagIds: curSelectedTagIds.filter(i => i !== tagId),
        });
      }
    } else {
      this.tagPresetRef.current.handleClear();
      this.setState({
        curTagPresetId: 0,
        curSelectedTagIds: [tagId],
      });
    }
    return true;
  }

  handleTagDelete(): boolean {
    const { curTagPresetId, tagPresets } = this.state;
    if (curTagPresetId !== 0) {
      this.tagPresetRef.current.handleClear();
      this.setState({
        tagPresets: tagPresets.filter(tp => tp.id !== curTagPresetId),
        curSelectedTagIds: [],
      });
    }
    return true;
  }

  handleTagCreatePrepare(): boolean {
    this.tagPresetRef.current.handleEditable();
    return true;
  }

  render(): React.ReactElement {
    const {
      tags,
      elements,
      curTagPresetId,
      tagPresets,
      curSelectedTagIds,
    } = this.state;

    const { tagPresetRef } = this;

    const tagPresetNames = tagPresets.map(t => {
      return { id: t.id, name: t.name };
    });

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
            <LabelCard LabelName="Tag preset" onClick={null} />
          </div>
          <div className="tag-preset-select-box">
            <SelectBox
              ref={tagPresetRef}
              selectList={tagPresetNames}
              selectedId={curTagPresetId}
              onChange={this.handleChangeTagPreset}
            />
          </div>
          <div className="tag-preset-button">
            <TextButton text="C" onClick={() => this.handleTagCreatePrepare} />
          </div>
          <div className="tag-preset-button">
            <TextButton text="A" onClick={this.handlePressInsert} />
          </div>
          <div className="tag-preset-button">
            <TextButton text="R" onClick={this.handlePressRemove} />
          </div>
          <div className="tag-preset-button">
            <TextButton text="D" onClick={this.handleTagDelete} />
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
                    onTagClick={(e: React.MouseEvent) =>
                      this.handleTagLabelClick(e, t.id)
                    }
                    onEditableClick={(): boolean =>
                      this.handleTagModeClick(t.id, 'isEditable')
                    }
                    onVisibleClick={(): boolean =>
                      this.handleTagModeClick(t.id, 'isVisible')
                    }
                    onLockedClick={(): boolean =>
                      this.handleTagModeClick(t.id, 'isLocked')
                    }
                    onFilteredClick={(): boolean =>
                      this.handleTagModeClick(t.id, 'isFiltered')
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
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
