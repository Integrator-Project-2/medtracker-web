import { DateInputContainer, InputLabel, StyledDateInput } from "./date-input";

interface DateInputProps {
    label: string;
    // value: string;
    // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    required?: boolean;
    padding?: string;
    width?: string;
}

export function DateInput({
    label,
    // value,
    // onChange,
    placeholder = '',
    required = false,
    padding,
    width,
}: DateInputProps) {
    return (
        <DateInputContainer>
            <InputLabel>{label}</InputLabel>
            <StyledDateInput
                type="date"
                // value={value}
                // onChange={onChange}
                placeholder={placeholder}
                required={required}
                padding={padding}
                width={width}
            />
        </DateInputContainer>
    )
}