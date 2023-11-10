import { useState } from "react";
import Fecha from "./Fecha";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  //function handleStepM() {setStep((e) => e + 1); }
  // function handleStepR() {setStep((e) => e - 1);}
  function handleReset() {
    setCount(0);
    setStep(1);
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
          <input
            name="step"
            type="range"
            value={step}
            min="0"
            max="10"
            onChange={(e) => setStep(Number(e.target.value))}
          />
          Step: {step}
          {/* <button onClick={handleStepR}> - </button> */}
          {/* <button onClick={handleStepM}> + </button> */}
        </span>
        <span>
          <button onClick={handleCountR}> - </button>
          <input
            type="number"
            name=""
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />
          <button onClick={handleCountM}> + </button>
        </span>
      </section>
      <Fecha C={count} D={date} />
      <span>
        <button onClick={handleReset} type="">
          Reset
        </button>
      </span>
    </div>
  );
}

export default App;
