import { useState } from "react";
import Fecha from "./Fecha";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function handleStepM() {
    setStep((e) => e + 1);
  }
  function handleStepR() {
    setStep((e) => e - 1);
  }

  function handleCountM() {
    setCount((ti) => ti + step);
  }
  function handleCountR() {
    setCount((ti) => ti - step);
  }

  let date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="App">
      <section>
        <span>
          <button onClick={handleStepR}> - </button>
          Step: {step}
          <button onClick={handleStepM}> + </button>
        </span>
        <span>
          <button onClick={handleCountR}> - </button>
          Count: {count}
          <button onClick={handleCountM}> + </button>
        </span>
      </section>
      <Fecha C={count} D={date} />
    </div>
  );
}

export default App;
