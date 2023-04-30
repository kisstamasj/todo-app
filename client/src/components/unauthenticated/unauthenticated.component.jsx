import { Fragment, useContext } from 'react';
import { UserContext } from '../../contexts/user.context';

const UnAuthenticated = ({ children }) => {
  const { currentUser } = useContext(UserContext);
  return <Fragment>{!currentUser && children}</Fragment>;
};

export default UnAuthenticated;
