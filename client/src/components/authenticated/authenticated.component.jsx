import { Fragment, useContext } from 'react';
import { UserContext } from '../../contexts/user.context';

const Authenticated = ({ children }) => {
  const { currentUser } = useContext(UserContext);

  return <Fragment>{currentUser && children}</Fragment>;
};

export default Authenticated;
