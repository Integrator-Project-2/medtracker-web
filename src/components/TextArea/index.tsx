import { InputLabel } from "../InputLabel";
import { TextArea as StyledTextArea, TextAreaContainer } from "./text-area";

interface TextAreaProps {
    placeholder?: string;
    label?: string;
    margin?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function TextArea({
    placeholder,
    label,
    margin,
    value,
    onChange
}: TextAreaProps) {
    return (

        <TextAreaContainer margin={margin}>
            {label && <InputLabel text={label} />}
            <StyledTextArea 
                placeholder={placeholder}
                value={value}
            />
        </TextAreaContainer>
    )
}