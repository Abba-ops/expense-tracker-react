import { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: [],
};

export const GlobalContext = createContext(initialState);
export default function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(AppReducer, initialState, () => {
    const localData = localStorage.getItem("transactions");
    return localData ? JSON.parse(localData) : initialState;
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state));
  }, [state]);

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        dispatch,
      }}>
      {children}
    </GlobalContext.Provider>
  );
}
