import React from "react";
import { withRouter } from "react-router";
import Step from "./step/Step";
import LastStep from "./lastStep/LastStep";
import "./_progressBar.style.scss";
class ProgressBar extends React.Component {
  render() {
    //I AM USING DUMMY DATA,BECAUSE I DO NOT KNOW HOW TO TAKE THE DINAMYCS STEPS FROM THE APP
    const listOfSteps = [
      { url: "shipping", title: "Shipping" },
      { url: "billing", title: "Review and payments" },
    ];
  
    const widthStep = Math.round(100 / (listOfSteps.length + 1)).toFixed(2);

    const windowUrlArray = this.props.location.pathname.split("/");
    const windowUrl = windowUrlArray[windowUrlArray.length - 1];
    const activeIndex = listOfSteps.findIndex((item) => item.url === windowUrl);
    
    return (
      <div className="progressBar">
        {listOfSteps.map((item, index) => {
          console.log(activeIndex, index);
          if (listOfSteps.length - 1 === index) {
            return (
              <LastStep
                active={activeIndex >= index}
                index={index}
                text={item.title}
                width={`${widthStep * 2}%`}
              />
            );
          } else {
            return (
              <Step
                active={activeIndex >= index}
                index={index}
                text={item.title}
                width={`${widthStep}%`}
              />
            );
          }
        })}
      </div>
    );
  }
}
export default withRouter(ProgressBar);
