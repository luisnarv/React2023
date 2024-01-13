const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createadAt: "",
};

export default function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "account/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createadAt: action.payload.createadAt,
      };

    case "account/updateName":
      return {
        ...state,
        fullName: action.payload,
      };

    default:
      return state;
  }
}

export function createCustomer(fullName, nationalID) {
  return {
    type: "account/createCustomer",
    payload: { fullName, nationalID, createadAt: new Date().toISOString() },
  };
}

export function updateName(fullName) {
  return { type: "account/updateName", payload: fullName };
}
