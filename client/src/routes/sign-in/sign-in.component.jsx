import { Link } from 'react-router-dom';
import Button from '../../components/button/button.component';
import FormInput from '../../components/form-input/form-input.component';
import { ButtonsContainer, SignInContainer } from './sign-in.styles';

const SignIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <SignInContainer>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <FormInput required type='email' label={'Email'} />
        <FormInput required type='password' label={'Password'} />
        <ButtonsContainer>
          <Button buttonType={'success'} type='submit'>
            Sign in
          </Button>
          <Link to={'/sign-up'}>Sign up here!</Link>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
