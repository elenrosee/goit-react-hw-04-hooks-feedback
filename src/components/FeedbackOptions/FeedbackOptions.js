import React from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./FeedbackOptions.module.scss";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={styles.buttons_list}>
      {Object.keys(options).map((option) => (
        <li key={uuidv4()}>
          <button
            className={styles.button}
            type="button"
            id={option}
            onClick={onLeaveFeedback}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;
