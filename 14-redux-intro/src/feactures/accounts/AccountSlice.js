const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

export default function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "acount/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "acount/withdraw":
      return { ...state, balance: state.balance - action.payload };

    case "acount/requestLoan":
      if (state.loan > 0) return;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
      };

    case "acount/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };

    default:
      return state;
  }
}

export function deposit(amount) {
  return { type: "acount/deposit", payload: amount };
}

export function withdraw(amount) {
  return { type: "acount/withdraw", payload: amount };
}

export function requestLoan(amount, purpose) {
  return {
    type: "acount/requestLoan",
    payload: { amount: amount, purpose: purpose },
  };
}

export function payLoan() {
  return { type: "acount/payLoan" };
}
