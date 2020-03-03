import React, { createRef, ReactElement, RefObject } from 'react';

type compassProps = {
  onRotateStart?: () => void;
  onRotate?: ({ translateAngle }: { translateAngle: number }) => void;
  onRotateEnd?: () => void;
};

type compassState = {
  isRotating: boolean;
  originalAngle: number;
  translateAngle: number;
  lastTranslateAngle: number;
};

export class Compass extends React.Component<compassProps, compassState> {
  private readonly compassRef: RefObject<SVGSVGElement>;

  constructor(props: compassProps) {
    super(props);
    this.compassRef = createRef();
    this.state = {
      isRotating: false,
      originalAngle: 0.0,
      translateAngle: 0.0,
      lastTranslateAngle: 0.0,
    };
  }

  componentWillUnmount(): void {
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);
  }

  getAngle = (clientX: number, clientY: number): number => {
    const {
      left,
      right,
      top,
      bottom,
    } = this.compassRef.current.getBoundingClientRect();

    const radian = Math.atan2(
      clientY - (bottom + top) * 0.5,
      clientX - (left + right) * 0.5,
    );
    const degree = (radian * 180) / Math.PI;

    return degree;
  };

  handleMouseDown = ({
    clientX,
    clientY,
  }: React.MouseEvent<SVGSVGElement>): void => {
    const { onRotateStart } = this.props;

    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('mouseup', this.handleMouseUp);
    if (onRotateStart) onRotateStart();

    this.setState({
      originalAngle: this.getAngle(clientX, clientY),
      isRotating: true,
    });
  };

  handleMouseMove = ({ clientX, clientY }: MouseEvent): void => {
    const { isRotating } = this.state;
    const { onRotate } = this.props;

    if (!isRotating) return;
    this.setState(
      prevState => ({
        translateAngle:
          this.getAngle(clientX, clientY) -
          prevState.originalAngle +
          prevState.lastTranslateAngle,
      }),
      () => {
        const { translateAngle } = this.state;
        this.compassRef.current.style.transform = `rotate(${translateAngle}deg)`;
        if (onRotate) {
          onRotate({ translateAngle });
        }
      },
    );
  };

  handleMouseUp = (): void => {
    const { translateAngle } = this.state;
    const { onRotateEnd } = this.props;
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);

    this.setState(
      {
        originalAngle: 0,
        lastTranslateAngle: translateAngle,
        isRotating: false,
      },
      () => {
        if (onRotateEnd) onRotateEnd();
      },
    );
  };

  render(): React.ReactElement {
    const { translateAngle } = this.state;
    return (
      <>
        <svg
          width="100"
          height="100"
          viewBox="0 0 20 20"
          ref={this.compassRef}
          onMouseDown={this.handleMouseDown}
        >
          <line
            x1="10"
            y1="10"
            x2="10"
            y2="20"
            stroke="black"
            strokeWidth="1"
          />
          <circle
            cx="10"
            cy="10"
            r="5"
            stroke="black"
            fill="none"
            strokeWidth="2"
          />
        </svg>
        <div>{translateAngle}</div>
      </>
    );
  }
}
