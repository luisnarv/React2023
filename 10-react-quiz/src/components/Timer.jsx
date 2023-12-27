import React, { useEffect } from "react";

export default function Timer({ dispatch, time }) {
  const minute = Math.floor(time / 60);
  const seconds = time % 60;

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, [dispatch]);

  return (
    <div className="timer">
      {minute < 10 && "0"}
      {minute}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}
