import { StyledDateInputProps } from "@/@types/components/StyledDateInputProps";
import { styled } from "styled-components";

export const DateInputContainer = styled.div<{margin?: string;}>`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 5px;
  margin: ${({ margin }) => margin || '0 0 37px 0'};
  justify-content: center;
  width: 100%;
`;

export const StyledDateInput = styled.input<StyledDateInputProps>`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || 'auto'};
  padding: ${({ padding }) => padding || '8px'};
  border-radius: ${({ borderRadius }) => borderRadius || '8px'};
  border: 1px solid var(--light-purple);
  color: var(--dark-blue);
  font-family: 'Poppins', sans-serif;
`;