import React from "react";
import "./_step.style.scss";
class Step extends React.Component {
  render() {
    return (
      <div
        className="step"
        style={{
          width: this.props.width,
        }}
      >
        <div
          className={
            this.props.active ? "step__line step__line-active" : "step__line"
          }
        ></div>
        <div className="step__content">
          <div
            className={
              this.props.active
                ? "step__content--number step__content--number-active"
                : "step__content--number"
            }
          >
            {this.props.index}
          </div>
          <div
            className={
              this.props.active
                ? "step__content--text step__content--text-active"
                : "step__content--text"
            }
          >
            {this.props.text}
          </div>
        </div>
      </div>
    );
  }
}
export default Step;
