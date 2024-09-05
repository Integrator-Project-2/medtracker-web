import { StyledDateInputProps } from "@/@types/components/StyledDateInputProps";
import { styled } from "styled-components";

export const DateInputContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 37px;
  justify-content: center;
  width: 100%;
`;

export const InputLabel = styled.label`
  font-size: 10px;
  color: var(--dark-blue);
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
`;

export const StyledDateInput = styled.input<StyledDateInputProps>`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || 'auto'};
  padding: ${({ padding }) => padding || '8px'};
  border-radius: ${({ borderRadius }) => borderRadius || '8px'};
  border: 1px solid var(--light-purple);
  color: var(--light-purple);
`;