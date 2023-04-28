import { Fragment, useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import Button from '../button/button.component';
import axios from 'axios'
import { useNavigate, Outlet  } from 'react-router-dom';

const SignOut = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate()
  const handleSignOut = async (e) => {
    e.preventDefault();
    await axios.post('/api/users/signout')
    setCurrentUser(null)
    navigate('/')
  };
  return (
    <Fragment>
      { currentUser && <Button onClick={handleSignOut}>Sign out</Button>}
      <Outlet />
    </Fragment>
  );
};

export default SignOut