import { H4 as H4Styled } from './h4.styled';

const H4 = ({ children, ...otherProps }) => {
  return <H4Styled {...otherProps}>{children}</H4Styled>;
};

export default H4;
