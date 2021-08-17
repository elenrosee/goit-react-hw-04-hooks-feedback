import React from "react";
import { useState } from "react";

import Section from "./components/Section";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Notification from "./components/Notification";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handelIncrementNew = (e) => {
    const { id } = e.target;

    switch (id) {
      case "good":
        setGood((state) => state + 1);
        break;

      case "neutral":
        setNeutral((state) => state + 1);
        break;

      case "bad":
        setBad((state) => state + 1);
        break;

      default:
        return;
    }
  };

  return (
    <React.Fragment>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={handelIncrementNew}
        />
      </Section>
      <Section title="Statistics">
        {good + bad + neutral === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            options={{ good, neutral, bad }}
            total={good + bad + neutral}
          />
        )}
      </Section>
    </React.Fragment>
  );
}
