import { StyledTextInputProps } from "@/@types/components/StyledTextInputProps";
import { TextInput as StyledTextInput } from "./text-input";

interface TextInputProps extends StyledTextInputProps {
    placeholder: string;
}

export function TextInput({ placeholder, padding, width, height }: TextInputProps) {
    return (
        <StyledTextInput
            placeholder={placeholder}
            padding={padding}
            width={width}
            height={height}
        />
    );
}