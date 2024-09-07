import { StyledTextInputProps } from "@/@types/components/StyledTextInputProps";
import { TextInput as StyledTextInput, TextInputContainer } from "./text-input";
import { InputLabel } from "../InputLabel";

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
            {label && <InputLabel text={label} />}
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