import React from "react";
import PropTypes from "prop-types";

import Section from "./components/Section";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Notification from "./components/Notification";

class App extends React.Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handelIncrement = (e) => {
    Object.keys(this.state).map((feedbackName) => {
      return e.target.id === feedbackName
        ? this.setState((state) => {
            return { [feedbackName]: state[feedbackName] + 1 };
          })
        : "";
    });
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((sum, current) => sum + current, 0);

  render() {
    return (
      <React.Fragment>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handelIncrement}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              options={this.state}
              total={this.countTotalFeedback()}
            />
          )}
        </Section>
      </React.Fragment>
    );
  }
}

export default App;
