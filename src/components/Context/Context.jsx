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


