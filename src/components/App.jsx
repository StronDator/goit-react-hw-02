import { useState, useEffect } from "react";
import Description from "./Description/Description";
// import './App.css';
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";

export default function App() {
  const STORAGE_KEY = "appState";

  const [state, setState] = useState(() => {
    const storageData = window.localStorage.getItem(STORAGE_KEY);

    if (storageData) {
      try {
        return JSON.parse(storageData);
      } catch (error) {
        console.error(error.message);
      }
    }

    return { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const updateFeedback = (feedbackType) => {
    // const newState = { ...state };
    // newState[feedbackType] += 1;
    setState({ ...state, [feedbackType]: state[feedbackType] + 1 });
  };

  const resetFeedback = () => {
    setState({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = state.good + state.neutral + state.bad;
  const notificationText = "No feedback yet";

  return (
    <>
      <Description
        title="Sip Happens Café"
        text="Please leave your feedback about our service by selecting one of the options below.
"
      ></Description>
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback ? (
        <Feedback {...state} />
      ) : (
        <Notification text={notificationText} />
      )}
    </>
  );
}
