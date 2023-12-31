import styled, { keyframes } from "styled-components";

import React from "react";
import { theme } from "../../theming/defaultTheme";

const spinAnimation = keyframes`
   0% {
     transform: rotate(0deg);
   }
   100% {
     transform: rotate(360deg);
   }
`;

const StyledLoaderPart = styled.div<{
  size: number;
  color: string;
  reverse?: boolean;
  duration: number;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
  border: 5px solid ${({ color }) => color};
  border-right: 5px solid transparent;
  animation-name: ${spinAnimation};
  animation-duration: ${({ duration }) => duration}s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  ${({ reverse }) => (reverse ? "animation-direction: reverse;" : "")}
`;

export const SimpleLoading: React.FC = () => {
  return (
    <StyledLoaderPart size={50} color={theme.colors.primary.dark} duration={2}>
      <StyledLoaderPart
        size={35}
        color={theme.colors.primary.main}
        reverse
        duration={1.5}
      >
        <StyledLoaderPart
          size={20}
          color={theme.colors.primary.light}
          duration={1}
        />
      </StyledLoaderPart>
    </StyledLoaderPart>
  );
};
