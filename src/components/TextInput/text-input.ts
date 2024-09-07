import { StyledTextInputProps } from "@/@types/components/StyledTextInputProps";
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

export const TextInput = styled.input<StyledTextInputProps>`
    width: ${({ width }) => width || '100%'};
    height: ${({ height }) => height || 'auto'};
    padding: ${({ padding }) => padding || '8px'};
    border-radius: ${({ borderRadius }) => borderRadius || '8px'};
    border: 1px solid var(--light-purple);
    color: var(--dark-blue);
    font-family: 'Poppins', sans-serif;
    font-size: 12px;

    & :focus {
        border: 1px solid var(--light-blue);
    }
`; 

