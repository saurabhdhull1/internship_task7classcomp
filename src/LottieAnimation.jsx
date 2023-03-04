import React from "react";
import Lottie from "lottie-web";
import animationData from "./animation.json";

class LottieAnimation extends React.Component {
  componentDidMount() {
    // Initialize the animation using the Lottie constructor
    this.anim = Lottie.loadAnimation({
      container: this.animBox,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });
  }
  componentWillUnmount() {
    // Stop the animation when the component unmounts
    this.anim.destroy();
  }

  render() {
    return (
      <>
        <div
          ref={(el) => (this.animBox = el)}
          className="h-[200px] cursor-pointer"
          onClick={this.handleClick}
        ></div>
      </>
    );
  }
}

export default LottieAnimation;
