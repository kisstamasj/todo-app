import { createContext, useEffect, useState } from 'react';

// as the actual value want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// functional component
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUserState] = useState(null);

  const setCurrentUser = (user) => {
    setCurrentUserState(user);
    localStorage.setItem('currentUser', JSON.stringify(user));
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    setCurrentUserState(user);
  }, []);

  const value = { currentUser, setCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
