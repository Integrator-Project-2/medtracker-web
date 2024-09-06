import { StyledTextInputProps } from "@/@types/components/StyledTextInputProps";
import { InputLabel, TextInput as StyledTextInput, TextInputContainer } from "./text-input";

interface TextInputProps extends StyledTextInputProps {
    placeholder?: string;
    label?: string;
    margin?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function TextInput({ 
    placeholder, 
    padding, 
    width, 
    height, 
    label, 
    margin, 
    value,
    onChange
}: TextInputProps) {
    return (
        <TextInputContainer margin={margin}>
            {label && <InputLabel>{label}</InputLabel>}
            <StyledTextInput
                placeholder={placeholder}
                padding={padding}
                width={width}
                height={height}
                value={value}
                onChange={onChange}
            />  
        </TextInputContainer>
    );
}