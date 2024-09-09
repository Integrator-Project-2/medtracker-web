import { StyledButtonProps } from "@/@types/components/StyledButtonProps";
import styled from "styled-components";
import { LoadingButton } from '@mui/lab';

export const Button = styled(LoadingButton)<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background-color: ${({ backgroundColor }) => backgroundColor || "var(--navy)"};
  color: ${({ color }) => color || "var(--white)"};
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  padding: ${({ padding }) => padding || "auto"};
  font-size: ${({ fontSize }) => fontSize || "12px"};
  font-family: 'Poppins', sans-serif;
  border: none;
  border-radius: ${({ borderRadius }) => borderRadius || "8px"};
  cursor: pointer;
  text-transform: capitalize;
  
  &:hover {
      opacity: 0.9;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6; 
    color: var(--white)
  }
`;
