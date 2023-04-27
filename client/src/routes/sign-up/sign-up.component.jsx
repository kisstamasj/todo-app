import Button from '../../components/button/button.component';
import FormInput from '../../components/form-input/form-input.component';
import { SignUpContainer } from './sign-up.styles';

const SignUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <SignUpContainer>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <FormInput required type='email' label={'Email'} />
        <FormInput required type='password' label={'Password'} />
        <FormInput required type='password' label={'Confirm password'} />
        <Button buttonType={'success'} type='submit'>
          Sign up
        </Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUp;
