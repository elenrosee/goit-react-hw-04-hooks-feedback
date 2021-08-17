import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./Statistics.module.scss";

class Statistics extends Component {
  countPositiveFeedbackPercentage = (data) =>
    Math.round((data.good / this.props.total) * 100, 2);

  render() {
    const { options, total } = this.props;

    return (
      <ul className={styles.statistics_list}>
        {Object.keys(options).map((option) => (
          <li className={styles.item} key={uuidv4()}>
            <p>{option}:</p>
            <p>{options[option]}</p>
          </li>
        ))}
        <li className={styles.item}>
          <p>Total:</p>
          <p>{total}</p>
        </li>
        <li className={styles.item}>
          <p>Positive feedback:</p>
          <p>{this.countPositiveFeedbackPercentage(options)}%</p>
        </li>
      </ul>
    );
  }
}

export default Statistics;
