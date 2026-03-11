import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [IsLogedIn, setIsLogedIn] = useState(false);

  const login = () => setIsLogedIn(true);
  const logout = () => setIsLogedIn(false);

  return (
    <>
      <AuthContext.Provider value={{ IsLogedIn, login, logout }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
