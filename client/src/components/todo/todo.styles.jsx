import styled from 'styled-components';

export const Title = styled.div``;

export const TodoContainer = styled.div`
  display: flex;
  border: 1px solid #ccc;
  padding: 5px;
  border-radius: 3px;
  margin: 10px;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  transition: 300ms ease all;
  cursor: pointer;

  &.completed {
    background-color: rgba(92, 169, 4, 1);
    border: 1px solid #fff;
    color: #fff;

    & ${Title} {
      text-decoration: line-through;
    }

    &:hover {
      background-color: rgba(92, 169, 4, 0.8);
      color: #fff;
    }
  }

  &:hover {
    background-color: #f2f2f2;
    color: #000;
  }
`;

export const Mark = styled.div``;

export const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
