import React from "react";
import { useQuiz } from "../Context/QuizContext";

export default function Progress() {
  const { index, maxPoints, numQuestions, points, answer } = useQuiz();
  //const maxPoints = questions.reduce((prev, cur) => prev + cur.points, 0);

  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong>/{numQuestions}
      </p>
      <p>
        {" "}
        <strong>{points}</strong>/{maxPoints}{" "}
      </p>
    </header>
  );
}
