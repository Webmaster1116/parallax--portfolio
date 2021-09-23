import React from "react";

const SkillsIcon = props => {
  return (
    <div
      className={
        props.category === props.selectedCategory ||
        props.selectedCategory === "all"
          ? "skills__iconBox"
          : "skills__hideIcon"
      }
    >
      <img src={props.src} alt="icon" className="skills__icon" />
      <p className="skills__iconLabel">{props.name}</p>
    </div>
  );
};

export default SkillsIcon;
