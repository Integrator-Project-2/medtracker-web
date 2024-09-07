import { TextInput as StyledTextInput, TextInputContainer } from "./text-input";
import { InputLabel } from "../InputLabel";
import { useController, UseControllerProps } from "react-hook-form";
import { MedicationFormValues } from "@/@types/form-values/MedicationFormValues";

interface TextInputProps extends UseControllerProps<MedicationFormValues>  {
    placeholder?: string;
    label?: string;
    margin?: string;
    value?: string;
    padding?: string;
    width?: string;
    height?: string;
    borderRadius?: string;
}

export function TextInput({ 
    placeholder, 
    padding, 
    width, 
    height, 
    label, 
    margin, 
    control,
    name,
    rules,
}: TextInputProps) {
    const { field, fieldState } = useController({ control, name, rules });

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