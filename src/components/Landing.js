// IMPORT LIBRARIES
import React, { Component } from "react";

// IMPORT IMAGES
import Cloud from "../images/cloud.svg";

// IMPORT STYLESHEETS
import "../stylesheets/Landing.css";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="landing__outer">
        <div className="landing__rightCloud container">
          <img
            onLoad={() => this.props.imageLoaded("cloud1")}
            src={Cloud}
            className="landing__rightCloud__img"
            alt="cloud"
          />
        </div>
        <div className="landing__titleBox">
          <h1 className="landing__titleBox__header">RODNEY CUMMING</h1>
          <h2 className="landing__titleBox__subHeader">Front End Developer</h2>
        </div>
        <div className="landing__leftCloud container">
          <img
            src={Cloud}
            onLoad={() => this.props.imageLoaded("cloud2")}
            className="landing__leftCloud__img"
            alt="cloud"
          />
        </div>
      </div>
    );
  }
}

export default Landing;
