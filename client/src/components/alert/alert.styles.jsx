import styled, { keyframes } from 'styled-components';

const dark = '#590700';
const light = '#ff8a80';

export const shakeAnimation = keyframes`
0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
`;

export const AlertContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 3px;
  animation: ${shakeAnimation} 0.5s;
  animation-iteration-count: 1;
`;

export const AlertDanger = styled(AlertContainer)`
  background-color: ${light};
  color: ${dark};
`;
