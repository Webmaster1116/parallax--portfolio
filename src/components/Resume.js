// IMPORT LIBRARIES
import React, { Component } from "react";
import { Link } from "react-router-dom";

// IMPORT COMPONENTS
import Footer from "./Footer";
import Heading from "./Heading";

// IMPORT IMAGES
import ResumePDF from "../images/resume/resume-img.pdf";
import ResumePNG from "../images/resume/resume-img.png";

// IMPORT STYLESHEETS

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.scrollToPosition(0);
  }

  render() {
    return (
      <div className="">
        <div className="parallax__cover__portfolio">
          <Heading
            title="Resume"
            para="Below is a copy of my resume or you can download a PDF version. For further information about how I might suit working with
          you in some capacity don't hesitate to get in touch."
            button="PDF"
            link={ResumePDF}
          />

          <div className="container__outer lightBG">
            <div className="container resume__container">
              <img
                src={ResumePNG}
                alt="resume segment"
                className="Resume__one"
              />
              <div
                className="resume__link resume__link1"
                onClick={() => this.props.showPopup("Phone")}
              />
              <div
                className="resume__link resume__link2"
                onClick={() => this.props.showPopup("Email")}
              />

              <Link to="./portfolio" className="resume__link resume__link3" />
              <a
                href="https://github.com/devrod?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="resume__link 
                resume__link4"
              >
                <p className="resume__link__hiddenText">
                  Link to Rodney's Github page
                </p>
              </a>
              <div className="resume__link resume__link5" />

              <a
                href="http://www.roddo.xyz"
                rel="noopener noreferrer"
                target="_blank"
                className="resume__link resume__link5"
              >
                <p className="resume__link__hiddenText">
                  Link to Snippets website
                </p>
              </a>

              <a
                href="https://github.com/devrod/snippets"
                target="_blank"
                rel="noopener noreferrer"
                className="resume__link resume__link6"
              >
                <p className="resume__link__hiddenText">
                  Link to Snippets Github
                </p>
              </a>

              <a
                href="https://devrod.github.io/react-pique/"
                rel="noopener noreferrer"
                target="_blank"
                className="resume__link resume__link7"
              >
                <p className="resume__link__hiddenText">
                  Link to Pique website
                </p>
              </a>
              <a
                href="https://github.com/devrod/react-pique"
                rel="noopener noreferrer"
                target="_blank"
                className="resume__link resume__link8"
              >
                <p className="resume__link__hiddenText">
                  Link to Pique website Github
                </p>
              </a>
            </div>
          </div>
          <Footer scrollToPosition={this.props.scrollToPosition} />
        </div>
      </div>
    );
  }
}

export default Resume;
