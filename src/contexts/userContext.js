import React, { useContext, useState } from "react";

const UserContext = React.createContext();
const UserUpdateContext = React.createContext();

export function useUserDetails() {
  return useContext(UserContext);
}

export function useUserUpdate() {
  return useContext(UserUpdateContext);
}

export function UserProvider({ children }) {
  const [userDetails, setUserDetails] = useState({
    email: "",
    phoneNumber: "",
    password: "",
    loggedIn: false,
  });

  function updateUser() {
    setUserDetails();
  }

  return (
    <UserContext.Provider value={userDetails}>
      <UserUpdateContext.Provider value={updateUser}>
        {children}
      </UserUpdateContext.Provider>
    </UserContext.Provider>
  );
}
