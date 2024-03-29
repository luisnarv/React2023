import React from "react";
import { useQuiz } from "../Context/QuizContext";

export default function Option() {
  const { questions, answer, index, newAnswer } = useQuiz();

  const question = questions.at(index);

  const hasAnswered = answer !== null;

  return (
    <div>
      <div className="options">
        {question.options.map((option, index) => (
          <button
            key={option}
            disabled={hasAnswered}
            className={`btn btn-option ${index === answer ? "answer" : ""} ${
              hasAnswered
                ? index === question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            onClick={() => newAnswer(index)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
