// IMPORT LIBRARIES
import React from "react";

// IMPORT STYLESHEETS
import "../stylesheets/Heading.css";

// IMPORT IMAGES

const Heading = props => {
  return (
    <div className="container__outer">
      <div className="container heading__container">
        <h1 className="heading__header" onClick={() => console.log(props)}>
          {props.title}
        </h1>
        <p className="heading__para">{props.para}</p>
        {props.button && (
          <a
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            className="heading__link"
          >
            <button className="heading__button">{props.button}</button>
          </a>
        )}
      </div>
    </div>
  );
};

export default Heading;
