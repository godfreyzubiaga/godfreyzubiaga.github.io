import { keyframes } from 'styled-components';

const slideFromBottom = keyframes`
  0% {
    transform: translateY(150%);
    opacity: 0;
  }
  
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
`;

export default slideFromBottom;
