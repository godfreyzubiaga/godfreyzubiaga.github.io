import { keyframes } from 'styled-components';

const bounce = keyframes`
  0% {
    transform: translateY(-20%);
    opacity: 0;
  }
  
  20% {
    transform: translateY(0%);
    opacity: 0.2;
  }
  
  40% {
    transform: translateY(-12%);
    opacity: 0.4;
  }

  60% {
    transform: translateY(0%);
    opacity: 0.6;
  }

  80% {
    transform: translateY(-4%);
    opacity: 0.8;
  }
  
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
  
`;

export default bounce;
