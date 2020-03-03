import React, { createRef, ReactElement, RefObject } from 'react';

import './SelectBox.scss';
import { TextBox } from '../atoms/TextBox';
import { SingleVertButton } from '../atoms/VertButton';

type SelectBoxProps = {
  selectList: {
    id: number;
    name: string;
  }[];
  selectedId: number;
  onChange?: (value: string | number) => void;
  editable?: boolean;
};

type SelectBoxState = {
  selectedId: number;
  showPullDown: boolean;
  editable: boolean;
};

export class SelectBox extends React.Component<SelectBoxProps, SelectBoxState> {
  // private readonly textBoxRef: RefObject<TextBox>;

  constructor(props: SelectBoxProps) {
    super(props);
    const { selectedId, editable } = this.props;
    this.state = { selectedId, editable, showPullDown: false };
    // this.textBoxRef = createRef();
    this.handleDropDown = this.handleDropDown.bind(this);
  }

  handleDropDown(): boolean {
    const { showPullDown } = this.state;
    this.setState({ showPullDown: !showPullDown });
    return true;
  }

  handleClear(): boolean {
    this.setState({ selectedId: 0 });
    return true;
  }

  handleEditable(): void {
    this.setState({ editable: true });
    // this.textBoxRef.current.handleFocus();
  }

  render(): ReactElement {
    const { selectList, onChange } = this.props;
    const { selectedId, showPullDown, editable } = this.state;
    return (
      <div
        className="select-box"
        onFocus={(): boolean => this.handleDropDown()}
        tabIndex={-1}
      >
        <TextBox
          // ref={this.textBoxRef}
          text={selectList.find(s => s.id === selectedId).name}
          editable={editable}
        />
        {showPullDown && (
          <div className="select-content">
            {selectList.map(({ id, name }) => {
              return (
                <option
                  className={
                    id === selectedId
                      ? 'select-element selected'
                      : 'select-element'
                  }
                  key={id}
                  value={id}
                  onClick={(): boolean => {
                    this.setState({ selectedId: id });
                    this.handleDropDown();
                    onChange(id);
                    return true;
                  }}
                >
                  {name}
                </option>
              );
            })}
          </div>
        )}
        <div className="select-button">
          <SingleVertButton onClick={this.handleDropDown} />
        </div>
      </div>
    );
  }
}
