import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./feactures/customers/CustomerSlice";
import accountReducer from "./feactures/accounts/AccountSlice";

//import { applyMiddleware, combineReducers, createStore } from "redux";
//import { thunk } from "redux-thunk";

// const rootReducer = combineReducers({
//   account: accountReducer,
//   customer: customerReducer,
// });
// const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store;

export default configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});
