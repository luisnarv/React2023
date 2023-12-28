import { useReducer } from "react";

const inittialState = {
  Status: "close",
  Balance: 0,
  Loan: 0,
};

function reducer(state, action) {
  if (state.Status !== "open" && action.type !== "activateAccount")
    return state;

  switch (action.type) {
    case "activateAccount":
      return { ...state, Balance: 500, Status: "open" };

    case "addDeposit":
      return { ...state, Balance: state.Balance + 150 };

    case "WithdrawAmount":
      return { ...state, Balance: state.Balance - 50 };

    case "RequestLoan":
      if (state.Loan !== 0) return state;
      const loan = 5000;
      return {
        ...state,
        Loan: state.Loan + loan,
        Balance: state.Balance + loan,
      };

    case "payLoan":
      const pay =
        state.Balance > state.Loan ? state.Balance - state.Loan : state.Balance;
      return {
        ...state,
        Balance: pay,
        Loan: state.Balance > state.Loan ? 0 : state.Loan,
      };

    case "closeAccount":
      if (state.Loan !== 0 || state.Balance !== 0) return state;
      return { ...inittialState };

    default:
      break;
  }
}

function App() {
  const [{ Status, Balance, Loan }, dispatch] = useReducer(
    reducer,
    inittialState
  );

  return (
    <div className="App">
      <h1>useReducer Bank Account</h1>
      <span>
        {" "}
        <strong>status: {Status} </strong>
      </span>
      <p>
        Balance: <strong>{Balance}</strong>{" "}
      </p>
      <p>
        Loan: <strong>{Loan}</strong>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "activateAccount" })}
          disabled={Status === "open"}
        >
          Open account
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "addDeposit" })}
          disabled={Status !== "open"}
        >
          Deposit 150
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "WithdrawAmount" })}
          disabled={Status !== "open"}
        >
          Withdraw 50
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "RequestLoan" })}
          disabled={Status !== "open"}
        >
          Request a Loan of 5000
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "payLoan" })}
          disabled={Status !== "open"}
        >
          Play Loan
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "closeAccount" })}
          disabled={Status === "open" && Loan === 0 ? false : true}
        >
          Close account
        </button>
      </p>
    </div>
  );
}

export default App;
