import { useState } from "react";

export default function Steps(props) {
  const [step, setstep] = useState(1);
  const [open, setOpen] = useState(true);

  function handlePrev() {
    if (step > 1) {
      setstep((s) => s - 1);
    }
  }

  function handleNext() {
    if (step < 3) {
      setstep((s) => s + 1);
    }
  }

  return (
    <div>
      <button
        className="close"
        onClick={() => {
          setOpen((is) => !is);
        }}
      >
        X
      </button>
      {open && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">{props.messages[step - 1]}</p>
          <div className="buttons">
            <button onClick={handlePrev}>Anterior</button>
            <button onClick={handleNext}>Siguiente</button>
          </div>
        </div>
      )}
    </div>
  );
}
