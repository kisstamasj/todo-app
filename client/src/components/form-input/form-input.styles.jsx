import styled from 'styled-components';

const subColor = 'grey';
const mainColor = 'black';
const focusedColor = '#357ae8';

export const Group = styled.div`
  width: 100%;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column-reverse;
  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;

export const FormInputLabel = styled.label`
  color: ${mainColor};
  font-size: 16px;
  font-weight: normal;
  margin-bottom: 5px;
  transition: all 300ms ease-in-out;
`;

export const FormInput = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  transition: all 300ms ease-in-out;
  &:focus {
    outline: none;
    border-bottom: 1px solid ${focusedColor};
    color: ${focusedColor};
    & + ${FormInputLabel} {
      color: ${focusedColor};
    }
  }
`;
