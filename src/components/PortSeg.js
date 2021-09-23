// IMPORT LIBRARIES
import React, { Component } from "react";
import { Link } from "react-router-dom";

// IMPORT STYLESHEETS
import "../stylesheets/PortSeg.css";

// IMPORT IMAGES
import PortPNG from "../images/portfolio.png";

class PortSeg extends Component {
  render() {
    return (
      <div className="container__outer lightBG">
        <div className="container">
          <div className="PortSeg__inner">
            {/* Portfolio Image */}
            <Link to="/portfolio" className="PortSeg__leftPanel">
              <img
                src={PortPNG}
                className="PortSeg__Img"
                alt="four screens displaying landing pages"
              />
            </Link>
            {/* Right Panel */}
            <div className="PortSeg__rightPanel">
              <div className="PortSeg__textContainer">
                <Link to="/portfolio" className="header PortSeg__header">
                  PORTFOLIO
                </Link>
                <p className="PortSeg__para">
                  Go to my portfolio to see my lastest projects I have build
                  end-to-end to showcase my abilities using core web development
                  technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PortSeg;
