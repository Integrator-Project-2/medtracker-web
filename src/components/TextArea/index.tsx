import { FieldValues, useController, UseControllerProps } from "react-hook-form";
import { InputLabel } from "../InputLabel";
import { TextArea as StyledTextArea, TextAreaContainer } from "./text-area";

interface TextAreaProps<T extends FieldValues> extends UseControllerProps<T> {
    placeholder?: string;
    label?: string;
    margin?: string;
    value?: string;
    width?: string;
    height?: string;
    padding?: string;
    color?: string;
}

export function TextArea<T extends FieldValues>({
    placeholder,
    color,
    label,
    margin,
    padding,
    width,
    height,
    control,
    name,
    rules,
}: TextAreaProps<T>) {
    const { field, fieldState } = useController<T>({ control, name, rules });

    return (

        <TextAreaContainer margin={margin}>
            {label && <InputLabel text={label} />}
            <StyledTextArea 
                placeholder={placeholder}
                width={width}
                height={height}
                color={color}
                padding={padding}
                {...field}
            />
            {fieldState.invalid && <span>{fieldState.error?.message}</span>}
        </TextAreaContainer>
    )
}