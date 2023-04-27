import { Form as StyledForm } from './form.styles';
const Form = ({ children, otherProps }) => {
  return <StyledForm {...otherProps}>{children}</StyledForm>;
};

export default Form;
