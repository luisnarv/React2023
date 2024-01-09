import React from "react";

export default function FinishScreen({
  points,
  maxPoints,
  highScore,
  dispatch,
}) {
  const percentage = (points / maxPoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🙃";
  if (percentage >= 0 && percentage < 50) emoji = "🤨";
  if (percentage === 0) emoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        {emoji}
        You scored <strong>{points}</strong> out of {maxPoints}(
        {Math.ceil(percentage)}%)
      </p>
      <h3 className="highscore">(Highscore: {highScore})</h3>

      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Reset
      </button>
    </>
  );
}
