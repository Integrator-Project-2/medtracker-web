import { StyledButtonProps } from "@/@types/components/StyledButtonProps";
import styled from "styled-components";

export const Button = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ backgroundColor }) => backgroundColor || "var(--navy)"};
  color: ${({ color }) => color || "var(--white)"};
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  padding: ${({ padding }) => padding || "auto"};
  font-size: ${({ fontSize }) => fontSize || "16px"};
  border: none;
  border-radius: ${({ borderRadius }) => borderRadius || "8px"};
  cursor: pointer;
  
  &:hover {
      opacity: 0.9;
  }

  & > img {
    margin-right: 8px;
  }
`;
