import { keyframes } from 'styled-components';

const scaleUp = keyframes`
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  75% {
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

export default scaleUp;