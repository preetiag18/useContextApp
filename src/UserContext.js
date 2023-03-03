import { createContext } from "react";
export const UserContext = createContext();

const UserContextProvider = (props) => {
  const user = {
    name: "Preeti",
    job: "Student",
  };
  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};

export { UserContextProvider };
