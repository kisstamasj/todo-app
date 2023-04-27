import styled from 'styled-components';

export const BaseButton = styled.button`
  min-width: 165px;
  /* width: 100%; */
  height: 40px;
  letter-spacing: 0.5px;
  line-height: 40px;
  padding: 0 25px 0 25px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  justify-content: center;
  font-weight: 100;
  transition: 300ms ease all;
  &:hover {
    background-color: white;
    border: 1px solid black;
    color: #000;
  }
`;

export const PrimaryButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;
  &:hover {
    background-color: #357ae8;
    border: none;
    color: #fff;
  }
`;

export const SuccessButton = styled(BaseButton)`
  background-color: rgba(92, 169, 4, 1);
  color: white;
  &:hover {
    background-color: rgba(92, 169, 4, 0.7);
    color: white;
    border: none;
  }
`;
