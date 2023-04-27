import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
  width: 300px;

  @media (max-width: 320px) {
    width: 250px;
  }
`;
