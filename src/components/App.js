// IMPORT LIBRARIES
import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";

// IMPORT COMPOENNTS
import Nav from "./Nav";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Resume from "./Resume";
import Popup from "./Popup";

// IMPORT STYLESHEETS
import "../stylesheets/App.css";
import "../stylesheets/Home.css";
import "../stylesheets/ContactSeg.css";
import "../stylesheets/Resume.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popup: false
    };

    // context bindings
    this.myRef = React.createRef();
    this.scrollToPosition = this.scrollToPosition.bind(this);
    this.closePopup = this.closePopup.bind(this);
    this.showPopup = this.showPopup.bind(this);
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    this.closeMobileMenu = this.closeMobileMenu.bind(this);
  }
  componentDidMount() {
    // Hide nav on initial load

    this.scrollToPosition(80);
    // Listen for click and resize
    window.addEventListener("click", this.closePopup);
    window.addEventListener("resize", this.handleWindowResize);
    // pre-load bg img for popup
    var image = new Image();
    image.src = "../images/bg.svg";
  }

  componentWillUnmount() {
    // Remove event listeners
    window.removeEventListener("resize", this.handleWindowResize);
    window.addEventListener("click", this.closePopup);
  }

  // Popup Methods
  closePopup(event) {
    // close popup if popup background or close btn is pressed
    if (
      event.target.id === "popupBackground" ||
      event.target.id === "popupCloseBtn"
    ) {
      this.setState({
        popup: false
      });
    }
  }

  showPopup(name) {
    this.setState({
      popup: name
    });
  }

  // Scroll Method (called on init load to hide nav)
  scrollToPosition(position) {
    if (window.navigator.userAgent.indexOf("Edge") === -1)
      if (this.myRef.current) {
        this.myRef.current.scrollTo(0, position);
      }
  }

  // Menu methods
  // sets isMobile boolean state to true or false
  handleWindowResize = () => {
    this.setState({
      isMobile: window.innerWidth < 1050
    });
  };
  // Toggle mobileMenu (called by nav hamburger to show/hide menu for mobile)
  toggleMobileMenu() {
    this.setState(prevState => ({
      mobileMenu: !prevState.mobileMenu
    }));
  }
  // close mobile menu (called by nav links to close menu when they are clicked)
  closeMobileMenu(number) {
    this.setState({
      mobileMenu: false
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          {/* Popup - all routes*/}
          <Route
            path=""
            render={props => (
              <div>
                {this.state.popup && <Popup popup={this.state.popup} />}
              </div>
            )}
          />

          <div className="parallax__overflow" ref={this.myRef}>
            {/* Nav - all routes*/}
            <Route
              path=""
              render={props => (
                <div>
                  <Nav
                    mobileMenu={this.state.mobileMenu}
                    toggleMobileMenu={this.toggleMobileMenu}
                    closeMobileMenu={this.closeMobileMenu}
                  />
                </div>
              )}
            />
            {/* Home - home route*/}
            <Route
              path=""
              exact
              render={props => (
                <Home
                  showPopup={this.showPopup}
                  closePopup={this.closePopup}
                  scrollToPosition={this.scrollToPosition}
                />
              )}
            />
            {/* Portfolio - portfolio route*/}
            <Route
              path="/portfolio"
              render={props => (
                <Portfolio scrollToPosition={this.scrollToPosition} />
              )}
            />
            {/* Contact - contact route*/}
            <Route
              path="/contact"
              render={props => (
                <Contact
                  showPopup={this.showPopup}
                  closePopup={this.closePopup}
                  scrollToPosition={this.scrollToPosition}
                />
              )}
            />
            {/* Resume - resume route*/}
            <Route
              path="/resume"
              render={props => (
                <Resume
                  showPopup={this.showPopup}
                  closePopup={this.closePopup}
                  scrollToPosition={this.scrollToPosition}
                />
              )}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
