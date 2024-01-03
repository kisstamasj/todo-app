import styled from "styled-components";

export const AppContainer = styled.div`
  margin: 30px auto;
  width: 400px;
  padding: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 3px;

  @media (max-width: 375px) {
    width: 100%;
    margin: 5px auto;
  }
  @media (max-width: 320px) {
    margin: 5px auto;
  }
`;
