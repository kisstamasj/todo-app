import { Fragment, useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import Button from '../../components/button/button.component';
import axios from 'axios';
import { useNavigate, Outlet } from 'react-router-dom';
import { AccountContainer, HeaderContainer, UserContainer } from './header.styles';
import { FiLogOut } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import Authenticated from '../../components/authenticated/authenticated.component';

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
      <HeaderContainer className={`${currentUser ? 'signedin' : ''}`}>
        <h1>Todo App</h1>
        <Authenticated>
          <AccountContainer>
            <UserContainer>
              <FaUserCircle /> {currentUser ? currentUser.email : null}
            </UserContainer>
            <Button onClick={handleSignOut}>
              <FiLogOut />
              Sign out
            </Button>
          </AccountContainer>
        </Authenticated>
      </HeaderContainer>
      <Outlet />
    </Fragment>
  );
};

export default Header;
