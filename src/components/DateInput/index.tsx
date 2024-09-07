import { InputLabel } from "../InputLabel";
import { DateInputContainer, StyledDateInput } from "./date-input";

interface DateInputProps {
    label: string;
    value: string;
    // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    required?: boolean;
    padding?: string;
    width?: string;
    margin?: string;
}

export function DateInput({
    label,
    value,
    // onChange,
    placeholder = '',
    required = false,
    padding,
    margin,
    width,
}: DateInputProps) {
    return (
        <DateInputContainer margin={margin}>
            {label && <InputLabel text={label} />}
            <StyledDateInput
                type="date"
                value={value}
                // onChange={onChange}
                placeholder={placeholder}
                required={required}
                padding={padding}
                width={width}
            />
        </DateInputContainer>
    )
}