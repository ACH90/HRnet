import { createContext, useContext, useReducer } from "react";

const EmployeeContext = createContext();

const initialState = [];

function employeeReducer(state, action) {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      return [...state, action.payload];
    default:
      return state;
  }
}

export function EmployeeProvider({ children }) {
  const [state, dispatch] = useReducer(employeeReducer, initialState);

  return (
    <EmployeeContext.Provider value={{ employees: state, dispatch }}>
      {children}
    </EmployeeContext.Provider>
  );
}

export function useEmployees() {
  return useContext(EmployeeContext);
}
