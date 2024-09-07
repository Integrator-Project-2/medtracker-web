import { InputLabel } from "../InputLabel";
import { TextArea as StyledTextArea, TextAreaContainer } from "./text-area";

interface TextAreaProps {
    placeholder?: string;
    label?: string;
    margin?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    width?: string;
    height?: string;
}

export function TextArea({
    placeholder,
    label,
    margin,
    value,
    width,
    height,
    onChange
}: TextAreaProps) {
    return (

        <TextAreaContainer margin={margin}>
            {label && <InputLabel text={label} />}
            <StyledTextArea 
                placeholder={placeholder}
                value={value}
                width={width}
                height={height}
            />
        </TextAreaContainer>
    )
}