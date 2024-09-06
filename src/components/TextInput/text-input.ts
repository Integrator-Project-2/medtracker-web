import { StyledTextInputProps } from "@/@types/components/StyledTextInputProps";
import { TextField } from "@radix-ui/themes";
import { styled } from "styled-components";

export const TextInputContainer = styled.div<{ margin?: string }>`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 5px;
    margin: ${({ margin }) => margin || '37px'};
    justify-content: center;
    width: 100%;
    font-family: 'Poppins', sans-serif;
`;

export const TextInput = styled(TextField.Root)<StyledTextInputProps>`
    width: ${({ width }) => width || '100%'};
    height: ${({ height }) => height || 'auto'};
    padding: ${({ padding }) => padding || '8px'};
    border-radius: ${({ borderRadius }) => borderRadius || '8px'};
    border: 1px solid var(--light-purple);
    color: var(--light-purple);
`; 

export const InputLabel = styled.label`
    font-size: 10px;
    color: var(--dark-blue);
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
`;