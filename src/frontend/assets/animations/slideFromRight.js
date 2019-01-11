import { keyframes } from 'styled-components';

const slideFromRight = keyframes`
  0% {
    transform: translateX(150%);
    opacity: 0;
  }
  100% {
    transform: translateX(0%);
    opacity: 1;
  }
`;

export default slideFromRight;
