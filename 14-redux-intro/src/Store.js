import { combineReducers, createStore } from "redux";
import customerReducer from "./feactures/customers/CustomerSlice";
import accountReducer from "./feactures/accounts/AccountSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(rootReducer);

export default store;
