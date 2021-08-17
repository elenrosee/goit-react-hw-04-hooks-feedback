import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import styles from "./Statistics.module.scss";

export default function Statistics({ options, total }) {
  const countPositiveFeedbackPercentage = (data) =>
    Math.round((data / total) * 100, 2);

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
        <p>{countPositiveFeedbackPercentage(options.good)}%</p>
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};
