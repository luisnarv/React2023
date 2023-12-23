import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(1);
  const [mainMoney, setainMoney] = useState("EUR");
  const [secundaryMoney, setSecundayMoney] = useState("USD");
  const [convert, setConvert] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //`https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

  useEffect(() => {
    async function frankfurterApi() {
      if (secundaryMoney === mainMoney)
        return alert("You cannot convert a value with the same currency");
      if (!mainMoney || !secundaryMoney) return;
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${value}&from=${mainMoney}&to=${secundaryMoney}`
        );
        const Response = await res.json();
        setConvert(Response.rates[secundaryMoney]);
        setIsLoading(false);
      } catch (error) {
        console.error(error.message, "esto es un error");
      }
    }
    frankfurterApi();
  }, [value, mainMoney, secundaryMoney]);

  return (
    <div className="App">
      <input
        type="number"
        name=""
        value={value}
        onChange={(e) => setValue((value) => Number(e.target.value))}
        disabled={isLoading}
      />
      <select
        disabled={isLoading}
        value={mainMoney}
        onChange={(e) => setainMoney(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>

      <select
        disabled={isLoading}
        value={secundaryMoney}
        onChange={(e) => setSecundayMoney(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>

      <p>{convert ? convert + " " + secundaryMoney : "OUTPUT"}</p>
      {isLoading ? <p>LOADING ...</p> : ""}
    </div>
  );
}

export default App;
