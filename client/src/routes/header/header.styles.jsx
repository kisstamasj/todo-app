import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  padding: 5px 15px;
  border-radius: 3px;
  &.signedin {
    justify-content: space-between;
  }
  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

export const AccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserContainer = styled.span`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  gap: 5px;
`;
