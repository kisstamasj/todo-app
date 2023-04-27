import { Fragment } from 'react';
import Button from '../../components/button/button.component';
import FormInput from '../../components/form-input/form-input.component';
import Form from '../../components/form/form.component';
import H4 from '../../components/h4/h4.component';

const SignUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Fragment>
      <h1>Sign up</h1>
      <H4>Create your account</H4>
      <Form onSubmit={handleSubmit}>
        <FormInput required type='email' label={'Email'} />
        <FormInput required type='password' label={'Password'} />
        <FormInput required type='password' label={'Confirm password'} />
        <Button buttonType={'primary'} type='submit'>
          Sign up
        </Button>
      </Form>
    </Fragment>
  );
};

export default SignUp;
