// IMPORT LIBRARIES
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

// IMPORT STYLESHEETS
import "../stylesheets/Nav.css";
import "../stylesheets/Home.css";

// IMPORT IMAGES
import LogoSVG from "../images/logo.svg";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
library.add(faTimes);

class Nav extends Component {
  render() {
    return (
      <div className="parallax__layer parallax__layer__6">
        <div className="nav__outer">
          <div className="navContainer">
            {/* Logo */}
            <NavLink to="" className="nav__logoContainer">
              <img src={LogoSVG} className="nav__logo" alt="logo" />
            </NavLink>
            {/* Dropdown Icon */}
            <p className="nav__hamburger" onClick={this.props.toggleMobileMenu}>
              &#9776;
            </p>
            {/* Link List */}
            <div className="nav__rightContainer">
              <div
                className={
                  this.props.mobileMenu
                    ? "nav__linkContainer"
                    : "nav__linkContainer nav__hideMobileMenu"
                }
              >
                {/* Close button for mobile */}
                <p
                  className="nav__closeBtn__wrapper"
                  onClick={this.props.toggleMobileMenu}
                >
                  <FontAwesomeIcon icon="times" className="nav__closeBtn" />
                </p>
                {/* Home Link */}
                <div className="nav__linkContainerInner">
                  <NavLink
                    to="/"
                    exact
                    activeClassName="nav__active"
                    className="nav__rightContainer__link"
                    onClick={() => this.props.closeMobileMenu()}
                  >
                    HOME
                  </NavLink>
                  {/* Portfolio Link */}
                  <NavLink
                    to="/portfolio"
                    activeClassName="nav__active"
                    className="nav__rightContainer__link"
                    onClick={() => this.props.closeMobileMenu()}
                  >
                    PORTFOLIO
                  </NavLink>
                  {/* Resume Link */}
                  <NavLink
                    to="/resume"
                    className="nav__rightContainer__link"
                    activeClassName="nav__active"
                    onClick={() => this.props.closeMobileMenu()}
                  >
                    R&Eacute;SUM&Eacute;
                  </NavLink>
                  {/* Contact Link */}
                  <NavLink
                    to="/contact"
                    className="nav__rightContainer__link"
                    activeClassName="nav__active"
                    onClick={() => this.props.closeMobileMenu()}
                  >
                    CONTACT
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
