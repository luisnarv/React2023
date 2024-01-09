import React, { useEffect } from "react";
import { useQuiz } from "../Context/QuizContext";

export default function StartScreen() {
  const { numQuestions, changeState } = useQuiz();

  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestions} Question to test your React mastery</h3>
      <button className="btn btn-ui" onClick={() => changeState("start")}>
        let's Start
      </button>
    </div>
  );
}
