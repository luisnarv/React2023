const initialState = {
  balance: 0,
  loan: 0,
  loanPorpuse: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "acount/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "acount/withdraw":
      return { ...state, balance: state.balance - action.payload };

    case "acount/requestLoan":
      if (state.loan > 0) return;
      return { ...state, loan: action.payload };

    case "acount/payLoan":
      return {
        ...state,
        loan: 0,
        loanPorpuse: "",
        balance: state.balance - state.loan,
      };

    default:
      return state;
  }
}
