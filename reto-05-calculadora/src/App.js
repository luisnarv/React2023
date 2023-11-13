import { useState } from "react";
import Factura from "./components/Factura";
import Propina from "./components/Propina";
import Output from "./components/Output";
import Reset from "./components/Reset";

function App() {
  const [pay, setPay] = useState("");
  const [porcentage1, setPorcentage1] = useState(0);
  const [porcentage2, setPorcentage2] = useState(0);

  const tip = pay * ((porcentage1 + porcentage2) / 2 / 100);

  function reset() {
    setPay("");
    setPorcentage1(0);
    setPorcentage2(0);
  }

  // const [tip, setTip] = useState({ F: 0, i: 0 });
  // const total = pay + ((tip.F + tip.i) * pay) / 100;

  // function Tip(e, nam) {
  //   console.log(e, "esto es es");
  //   setTip({ ...tip, [nam]: Number(e.target.value) });
  // }

  return (
    <div className="App">
      <Factura pay={pay} Pay={setPay} />
      <Propina
        porcen1={porcentage1}
        onporcen1={setPorcentage1}
        porcen2={porcentage2}
        onporcen2={setPorcentage2}
      />{" "}
      {pay && (
        <>
          <Output tips={tip} pay={pay} />
          <Reset onReset={reset} />
        </>
      )}
      {/* <Propina Tip={Tip} /> */}
      {/* <p>{`You pay $ ${total} (${pay} + ${tip.F + tip.i} tip ) `}</p> */}
      {/* <p>{`You pay $ ${total} (${pay} + ${
        porcentage1 + porcentage2
      } tip ) `}</p> */}
    </div>
  );
}

export default App;
