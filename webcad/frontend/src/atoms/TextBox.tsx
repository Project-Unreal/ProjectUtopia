import React, {
  ChangeEvent,
  createRef,
  ReactElement,
  RefObject,
  useCallback,
  useState,
} from 'react';

import './TextBox.scss';

export const TextBox = ({
  text,
  editable,
}: {
  text: string;
  editable?: boolean;
}): ReactElement => {
  const [curText, setText] = useState(text);
  return editable ? (
    <input
      className="TextBox"
      value={curText}
      onChange={useCallback(e => {
        setText(e.target.value);
      }, [])}
    />
  ) : (
    <div className="TextBox">{curText}</div>
  );
};

type textBoxProps = {
  text: string;
  editable?: boolean;
};

type textBoxState = {
  text: string;
  editable: boolean;
};

export class TextBox_ extends React.Component<textBoxProps, textBoxState> {
  private readonly inputRef: RefObject<HTMLInputElement>;

  constructor(props: textBoxProps) {
    super(props);
    const { text, editable } = this.props;
    this.state = {
      text,
      editable: editable || false,
    };
    this.inputRef = createRef();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: ChangeEvent<HTMLInputElement>): boolean {
    this.setState({ text: e.target.value });
    return true;
  }

  handleFocus(): void {
    this.inputRef.current.focus();
  }

  handleFinishEditing(): string {
    const { text } = this.state;
    this.inputRef.current.blur();
    return text;
  }

  render(): ReactElement {
    const { text, editable } = this.state;
    return editable ? (
      <input
        ref={this.inputRef}
        className="TextBox"
        value={text}
        onChange={this.handleChange}
      />
    ) : (
      <div className="TextBox">{text}</div>
    );
  }
}
