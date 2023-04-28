import styled from 'styled-components';

const dark = '#800b00';
const light = '#ff8a80';

export const AlertContainer = styled.div`
  width: 100%;
  padding: 15px;
  margin-bottom: 15px;
  border: 1px solid ${dark};
  border-radius: 3px;
`;

export const AlertDanger = styled(AlertContainer)`
  background-color: ${light};
  color: ${dark};
`;
