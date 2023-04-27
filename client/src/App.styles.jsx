import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
  width: 400px;

  @media (max-width: 400px) {
    width: 250px;
  }
`;
