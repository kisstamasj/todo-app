import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/button/button.component';
import FormInput from '../../components/form-input/form-input.component';
import { ButtonsContainer } from './sign-in.styles';
import Form from '../../components/form/form.component';
import { Fragment, useContext, useEffect, useState } from 'react';
import H4 from '../../components/h4/h4.component';
import { UserContext } from '../../contexts/user.context';
import axios from 'axios';
import Alert from '../../components/alert/alert.component';
import { FiLogIn } from 'react-icons/fi';
import { GoAlert } from 'react-icons/go';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignIn = () => {
  const navigate = useNavigate();
  const [formFields, setFormfields] = useState(defaultFormFields);
  const [errors, setErrors] = useState(null);
  const { setCurrentUser, currentUser } = useContext(UserContext);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormfields({ ...formFields, [name]: value });
  };

  useEffect(() => {
    if (currentUser) {
      navigate('/todos');
    }
  }, [currentUser, navigate]);

  const handleSubmit = async (e) => {
    setErrors('');
    e.preventDefault();

    try {
      const { data } = await axios.post('/api/users/signin', formFields);
      setCurrentUser(data);
      setErrors('');
      setFormfields(defaultFormFields);
      navigate('/todos');
    } catch (error) {
      if (error.response.data.message) {
        setErrors(error.response.data.message);
      }
    }
  };
  return (
    <Fragment>
      {!currentUser && (
        <Fragment>
          <h1>Sign in</h1>
          <H4>Please sign in with your credentials</H4>
          <Form onSubmit={handleSubmit}>
            <FormInput
              required
              type='email'
              label={'Email'}
              onChange={handleChange}
              value={formFields.email}
              name='email'
            />
            <FormInput
              required
              type='password'
              label={'Password'}
              onChange={handleChange}
              value={formFields.password}
              name='password'
            />
            {errors && (
              <Alert type={'danger'}>
                <GoAlert /> {errors}
              </Alert>
            )}
            <ButtonsContainer>
              <Link to={'/sign-up'}>Sign up here!</Link>
              <Button buttonType={'primary'} type='submit'>
                <FiLogIn /> Sign in
              </Button>
            </ButtonsContainer>
          </Form>
        </Fragment>
      )}
    </Fragment>
  );
};

export default SignIn;
