import React, { ReactElement } from 'react';

import './SelectBox.scss';
import { TextBox } from '../atoms/TextBox';
import { SingleVertButton } from '../atoms/VertButton';

type SelectBoxProps = {
  selectList: {
    id: number;
    name: string;
  }[];
  selected: number;
  onChange?: (value: string | number) => void;
};

type SelectBoxState = {
  selected: number;
  showPullDown: boolean;
};

export class SelectBox extends React.Component<SelectBoxProps, SelectBoxState> {
  constructor(props: SelectBoxProps) {
    super(props);
    const { selected } = this.props;
    this.state = { selected, showPullDown: false };

    this.handleDropDown = this.handleDropDown.bind(this);
  }

  handleDropDown(): void {
    // console.log(this.state.showPullDown);
    const { showPullDown } = this.state;
    this.setState({ showPullDown: !showPullDown });
  }

  render(): ReactElement {
    const { selectList, onChange } = this.props;
    const { selected, showPullDown } = this.state;
    return (
      <div
        className="select-box"
        onBlur={(): void => this.handleDropDown()}
        onFocus={(): void => this.handleDropDown()}
        tabIndex={-1}
      >
        <TextBox text={selectList.find(s => s.id === selected).name} />
        {showPullDown && (
          <div className="select-content">
            {selectList.map(({ id, name }) => {
              return (
                <option
                  className={
                    id === selected
                      ? 'select-element selected'
                      : 'select-element'
                  }
                  key={id}
                  value={id}
                  onClick={(): void => {
                    this.setState({ selected: id });
                    this.handleDropDown();
                    onChange(id);
                  }}
                >
                  {name}
                </option>
              );
            })}
          </div>
        )}
        <div className="select-button">
          <SingleVertButton onClick={(): void => this.handleDropDown()} />
        </div>
      </div>
    );
  }
}
