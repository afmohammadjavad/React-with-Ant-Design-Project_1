import { createContext, useState } from "react";

export const userContext = createContext();

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([
    { id: 1, name: "Arghun" },
    { id: 2, name: "Mohammad Javad" },
    { id: 3, name: "Ehsan" },
  ]);

  return (
    <userContext.Provider value={{ users, setUsers }}>
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
