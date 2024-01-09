import React from "react";

export default function NextButton({
  dispatch,
  answer,
  index,
  numQuestions,
  status,
}) {
  // console.log(status, "finish es status---------------------");
  if (answer === null) return;
  if (index < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: "nextQuestion" });
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
          dispatch({ type: "finish" });
        }}
      >
        Finish
      </button>
    );
}
