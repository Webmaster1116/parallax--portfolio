// IMPORT LIBRARIES
import React, { Component } from "react";

// IMPORT COMPONENTS
import AboutSeg from "./AboutSeg";
import SkillsSeg from "./SkillsSeg";
import ResumeSeg from "./ResumeSeg";
import PortSeg from "./PortSeg";
import ContactSeg from "./ContactSeg";
import Footer from "./Footer";

class HomeSegments extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="parallax__cover">
        <AboutSeg />

        <SkillsSeg />
        <ResumeSeg />
        <PortSeg />
        <ContactSeg
          showPopup={this.props.showPopup}
          closePopup={this.props.closePopup}
          header={true}
        />
        <Footer scrollToPosition={this.props.scrollToPosition} />
      </div>
    );
  }
}

export default HomeSegments;
