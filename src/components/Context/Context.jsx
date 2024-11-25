<<<<<<< HEAD
import { createContext, useState } from "react";

export let Context = createContext("");
export function ContextProvider({ children }) {
  let [userName, setUserName] = useState("");
  let [baseUrl]=useState('https://joumla.store/api/v1')
  return (
    <Context.Provider value={{ userName, setUserName ,baseUrl}}>
      {children}
    </Context.Provider>
  );
}


=======
import React, { createContext, useContext } from "react";

// Create the context
const ApiContext = createContext();

// Create a provider component
export const ApiProvider = ({ children }) => {
  // Define your API base URL
  const apiBaseUrl = "https://api.example.com"; // Replace with your actual API base URL
s
  // Provide the value to the context
  return (
    <ApiContext.Provider value={{ apiBaseUrl }}>
      {children}
    </ApiContext.Provider>
  );
};


// Custom hook to use the API context
export const useApi = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error("useApi must be used within an ApiProvider");
  }
  return context;
};
>>>>>>> 357d48fc7d51a66de858fc642d82b34f7f273984
