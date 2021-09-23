// IMPORT LIBRARIES
import React, { Component } from "react";
import { Link } from "react-router-dom";

// IMPORT STYLESHEETS
import "../stylesheets/ResumeSeg.css";

// IMPORT IMAGES
import ResumeImg from "../images/resume/resume-img.png";

class ResumeSeg extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container__outer resumeSeg__outer">
        <div className="resumeSeg container">
          <div className="resumeSeg__inner">
            {/* Left Panel */}
            <div className="resumeSeg__leftPanel">
              <div className="resumeSeg__textContainer">
                <Link to="/resume" className="header resumeSeg__header">
                  RESUME
                </Link>
                <p className="resumeSeg__para">
                  Check out my resume if your interested in hiring me. I'm
                  currently looking for full or part-time work.
                </p>
              </div>
            </div>
            {/* Resume Image */}
            <Link to="/resume" className="resumeSeg__rightPanel">
              <img src={ResumeImg} className="resumeSeg__Img" alt="Resume" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ResumeSeg;
