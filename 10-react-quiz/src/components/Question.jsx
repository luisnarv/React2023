import React from "react";
import Option from "./Option";
import { useQuiz } from "../Context/QuizContext";

export default function Question() {
  const { questions, index } = useQuiz();
  return (
    <div>
      <h4>{questions.at(index).question}</h4>

      <Option />
    </div>
  );
}
