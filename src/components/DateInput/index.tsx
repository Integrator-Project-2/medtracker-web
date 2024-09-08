import { FieldValues, useController, UseControllerProps } from "react-hook-form";
import { InputLabel } from "../InputLabel";
import { DateInputContainer, StyledDateInput } from "./date-input";

interface DateInputProps<T extends FieldValues> extends UseControllerProps<T> {
    label: string;
    placeholder?: string;
    padding?: string;
    width?: string;
    margin?: string;
}

export function DateInput<T extends FieldValues>({
    label,
    placeholder = '',
    padding,
    margin,
    width,
    control,
    name,
    rules,
}: DateInputProps<T>) {
    const { field, fieldState } = useController<T>({ control, name, rules });

    return (
        <DateInputContainer margin={margin}>
            {label && <InputLabel text={label} />}
            <StyledDateInput
                type="date"
                placeholder={placeholder}
                padding={padding}
                width={width}
                {...field}
            />
            
            {fieldState.invalid && <span>{fieldState.error?.message}</span>}
        </DateInputContainer>
    )
}