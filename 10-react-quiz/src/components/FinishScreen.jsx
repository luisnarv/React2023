import React from "react";
import { useQuiz } from "../Context/QuizContext";

export default function FinishScreen() {
  const { points, maxPoints, highScore, resetTime } = useQuiz();
  const porcentage = (points / maxPoints) * 100;
  console.log(porcentage, maxPoints);

  let emoji;
  if (porcentage === 100) emoji = "🥇";
  if (porcentage >= 80 && porcentage < 100) emoji = "🎉";
  if (porcentage >= 50 && porcentage < 80) emoji = "🙃";
  if (porcentage >= 0 && porcentage < 50) emoji = "🤨";
  if (porcentage === 0) emoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        {emoji}
        You scored <strong>{points}</strong> out of {maxPoints}(
        {Math.ceil(porcentage)}%)
      </p>
      <h3 className="highscore">(Highscore: {highScore})</h3>

      <button
        className="btn btn-ui"
        onClick={() => {
          resetTime();
        }}
      >
        Reset
      </button>
    </>
  );
}
