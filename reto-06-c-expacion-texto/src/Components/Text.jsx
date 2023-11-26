import { useState } from "react";

export default function Text({
  collapsedNumber = 10,
  expandButton = "Show more",
  collapseButton = "Show less",
  buttonColor = "#1f09cd",
  expanded = false,
  clasName,
  children,
}) {
  const [show, setShow] = useState(expanded);

  const display = show
    ? children
    : children.split(" ").slice(0, collapsedNumber).join(" ") + "...";

  const butonstyle = {
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    marginLeft: 6,
    color: buttonColor,
  };

  return (
    <>
      <div className={clasName}>
        <span>{display}</span>
        <button style={butonstyle} onClick={() => setShow((show) => !show)}>
          {show ? expandButton : collapseButton}
        </button>
      </div>
    </>
  );
}
//    whiteSpace: "initial",
