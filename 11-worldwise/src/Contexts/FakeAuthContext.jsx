/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const initialState = {
  // user: null,
  error: "",
  user: {
    name: "Jack",
    email: "jack@example.com",
    password: "qwerty",
    avatar: "https://i.pravatar.cc/100?u=zz",
  },
  isAuntheticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login/error":
      return { ...state, error: "The username or password is wrong" };
    case "login":
      return { ...state, user: action.payload, isAuntheticated: true };

    case "logout":
      return { ...state, user: null, isAuntheticated: false };

    default:
      throw new Error("Unknown action");
  }
}

const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

function AuthProvider({ children }) {
  const [{ error, user, isAuntheticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      dispatch({ type: "login", payload: FAKE_USER });
    } else {
      dispatch({ type: "login/error" });
    }
  }
  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider
      value={{ error, login, logout, user, isAuntheticated }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext  was used outside AuthProvider");
  return context;
}

export { AuthProvider, useAuth };
