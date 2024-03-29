import React, { useEffect } from "react";
import { useQuiz } from "../Context/QuizContext";

export default function Timer() {
  const { clockTime, time } = useQuiz();

  const minute = Math.floor(time / 60);
  const seconds = time % 60;

  useEffect(() => {
    const id = setInterval(() => {
      clockTime({ type: "tick" });
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, [clockTime]);

  return (
    <div className="timer">
      {minute < 10 && "0"}
      {minute}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}
