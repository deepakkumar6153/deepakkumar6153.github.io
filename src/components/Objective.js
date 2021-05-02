import React, { useState } from "react";
import PropTypes from "prop-types";
import s from "./Objective.module.scss";
import arrow from "../assets/arrow.svg";

const Objective = (props) => {
  const { title, children = [] } = props;
  const [isOpen, setIsOpen] = useState(true);

  const handleArrowClick = (e) => {
    setIsOpen((isOpen) => {
      return !isOpen;
    });
  };

  return (
    <div className={s.objective}>
      <div onClick={handleArrowClick} className={s.parent}>
        <img
          src={arrow}
          alt={isOpen ? "close " : "open "}
          className={isOpen ? s.open : ""}
        ></img>
        <div className={s.title}>{title}</div>
      </div>

      {isOpen && (
        <div className={s.child}>
          {children.map((child) => {
            return (
              <>
                <div className={s.role}>{`${child.title}`}</div>
              </>
            );
          })}
        </div>
      )}
    </div>
  );
};

Objective.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array,
};

export default Objective;
