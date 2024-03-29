import React from "react";
import { useQuiz } from "../Context/QuizContext";

export default function NextButton() {
  const { nextQuestion, finish, answer, index, numQuestions, status } =
    useQuiz();

  // console.log(status, "finish es status---------------------");
  if (answer === null) return;
  if (index < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => {
          nextQuestion();
        }}
      >
        Next
      </button>
    );
  if (index === numQuestions - 1 && status !== "finish")
    return (
      <button
        className="btn btn-ui"
        onClick={() => {
          finish();
        }}
      >
        Finish
      </button>
    );
}
