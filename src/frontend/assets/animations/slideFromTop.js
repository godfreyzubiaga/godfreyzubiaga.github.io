import { keyframes } from "styled-components";

const slideFromTop = keyframes`
  0% {
    transform: scale(0.6) translateY(-50%);
    opacity: 0;
  }
  100% {
    transform: scale(1) translateY(0%);
    opacity: 1;
  }
`;

export default slideFromTop;
