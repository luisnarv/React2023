// import { useState } from "react";
import Steps from "./Steps";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  // const [open, setOpen] = useState(true);

  return (
    <>
      {/* <button
        className="close"
        onClick={() => {
          setOpen((is) => !is);
        }}
      >
        X
      </button> 
      {open && <Steps messages={messages} />}*/}
      <Steps messages={messages} />
    </>
  );
}

export default App;
