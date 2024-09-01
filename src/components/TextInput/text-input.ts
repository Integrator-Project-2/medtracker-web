import { StyledTextInputProps } from "@/@types/components/StyledTextInputProps";
import { TextField } from "@radix-ui/themes";
import { styled } from "styled-components";

export const TextInput = styled(TextField.Root)<StyledTextInputProps>`
    width: ${({ width }) => width || '100%'};
    height: ${({ height }) => height || 'auto'};
    padding: ${({ padding }) => padding || '8px'};
    border-radius: ${({ borderRadius }) => borderRadius || '8px'};
    
`; 