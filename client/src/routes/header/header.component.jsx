import { Fragment, useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import Button from '../../components/button/button.component';
import axios from 'axios';
import { useNavigate, Outlet } from 'react-router-dom';

const Header = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();
  const handleSignOut = async (e) => {
    e.preventDefault();
    await axios.post('/api/users/signout');
    setCurrentUser(null);
    navigate('/');
  };
  return (
    <Fragment>
      <h1>Todo App</h1>
      {currentUser && (
        <Fragment>
          <span>Hi, {currentUser.email}</span>
          <Button onClick={handleSignOut}>Sign out</Button>
        </Fragment>
      )}
      <Outlet />
    </Fragment>
  );
};

export default Header;
