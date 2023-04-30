import { Fragment, useContext, useEffect } from 'react';
import { UserContext } from '../../contexts/user.context';
import { useNavigate } from 'react-router-dom';

const Authenticated = ({ children }) => {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate('/');
    }
  }, [currentUser, navigate]);

  return <Fragment>{currentUser && children}</Fragment>;
};

export default Authenticated;
