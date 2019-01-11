import { keyframes } from 'styled-components';

const slideWithSkew = keyframes`
  0% {
    transform: translateX(-50%);
    opacity: 0;
  }

  50% {
    transform: translateX(20%) skewX(-30deg);
    opacity: 1;
  }

  100% {
    transform: translateX(0%) skewX(0deg);
  }
`;

export default slideWithSkew;
