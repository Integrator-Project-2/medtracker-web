import { TextInput as StyledTextInput, TextInputContainer } from "./text-input";
import { InputLabel } from "../InputLabel";
import { FieldValues, useController, UseControllerProps } from "react-hook-form";

interface TextInputProps<T extends FieldValues> extends UseControllerProps<T>  {
    placeholder?: string;
    label?: string;
    margin?: string;
    value?: string;
    padding?: string;
    width?: string;
    height?: string;
    borderRadius?: string;
}

export function TextInput<T extends FieldValues>({ 
    placeholder, 
    padding, 
    width, 
    height, 
    label, 
    margin, 
    control,
    name,
    rules,
}: TextInputProps<T>) {
    const { field, fieldState } = useController<T>({ control, name, rules });

    return (
        <TextInputContainer margin={margin}>
            {label && <InputLabel text={label} />}
            <StyledTextInput
                placeholder={placeholder}
                padding={padding}
                width={width}
                height={height}
                {...field}
            />  
            {fieldState.invalid && <span>{fieldState.error?.message}</span>}
        </TextInputContainer>
    );
}