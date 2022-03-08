import React from "react";
import "./_lastStep.style.scss";
class LastStep extends React.Component {
  render() {
    return (
      <div
        className="last-step"
        style={{
          width: this.props.width,
        }}
      >
        <div
          className={
            this.props.active
              ? "last-step__line last-step__line-active"
              : "last-step__line"
          }
        ></div>
        <div className="last-step__content">
          <div
            className={
              this.props.active
                ? "last-step__content--number last-step__content--number-active"
                : "last-step__content--number"
            }
          >
            {this.props.index}
          </div>
          <div
            className={
              this.props.active
                ? "last-step__content--text last-step__content--text-active"
                : "last-step__content--text"
            }
          >
            {this.props.text}
          </div>
        </div>

        <div
          className={
            this.props.active
              ? "last-step__line-right last-step__line-right-active"
              : "last-step__line-right"
          }
        ></div>
      </div>
    );
  }
}
export default LastStep;
