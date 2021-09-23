// IMPORT LIBRARIES
import React, { Component } from "react";

// IMPORT STYLESHEETS
import "../stylesheets/AboutSeg.css";

class AboutSeg extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container__outer">
        <div className="container">
          <h1 className="header about__header">ABOUT ME</h1>
          <p className="para about__para">
            Hey there, I'm Rodney Cumming. I'm passionate about creating
            beautiful, user-friendly websites using clean, modular code. I love
            learning about the latest technologies and applying them to produce
            high quality work.
          </p>
          <p className="para about__para">
            I also enjoy reading, drinking coffee and playing a bit of sport in
            my free time.
          </p>
        </div>
      </div>
    );
  }
}

export default AboutSeg;
