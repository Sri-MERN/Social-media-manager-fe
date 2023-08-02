import React, { useState } from 'react';
import UserContext from './UserContext';

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [email,setEmail]= useState(null);

  const handleLogin = (userData,email) => {
    setUser(userData)
    setEmail(email);
  };

  const handleLogout = () => {
    setUser(null);
    setEmail(null)
  };

  return (
    <UserContext.Provider value={{user, email, handleLogin, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
