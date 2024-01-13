import CreateCustomer from "./feactures/customers/CreateCustomer";
import Customer from "./feactures/customers/Customer";
import AccountOperations from "./feactures/accounts/AccountOperations";
import BalanceDisplay from "./feactures/accounts/BalanceDisplay";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.customer.fullName);
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {user === "" ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
}

export default App;
