import { Link } from 'react-router-dom';
import Button from '../../components/button/button.component';
import FormInput from '../../components/form-input/form-input.component';
import { ButtonsContainer } from './sign-in.styles';
import Form from '../../components/form/form.component';
import { Fragment } from 'react';
import H4 from '../../components/h4/h4.component';

const SignIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Fragment>
      <h1>Sign in</h1>
      <H4>Please sign in with your credentials</H4>
      <Form onSubmit={handleSubmit}>
        <FormInput required type='email' label={'Email'} />
        <FormInput required type='password' label={'Password'} />
        <ButtonsContainer>
          <Button buttonType={'primary'} type='submit'>
            Sign in
          </Button>
          <Link to={'/sign-up'}>Sign up here!</Link>
        </ButtonsContainer>
      </Form>
    </Fragment>
  );
};

export default SignIn;
