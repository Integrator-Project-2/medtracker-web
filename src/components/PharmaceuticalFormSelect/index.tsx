import { InputLabel } from "../InputLabel";
import { SelectContainer, StyledSelect } from "./pharmaceutical-form-select";

const PHARMACEUTICAL_FORM = [
    { value: 'tablet', label: 'Tablet' },
    { value: 'capsule', label: 'Capsule' },
    { value: 'solution', label: 'Solution' },
    { value: 'liquid', label: 'Liquid' },
    { value: 'drops', label: 'Drops' },
    { value: 'injectable', label: 'Injectable' },
];

interface PharmaceuticalFormSelectProps  {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    margin?: string;
    padding?: string;
    label?: string;
}

export function PharmaceuticalFormSelect({ value, onChange, margin, padding, label }: PharmaceuticalFormSelectProps) {
    return (
        <SelectContainer margin={margin}> 
            {label && <InputLabel text={label} />}
            <StyledSelect padding={padding} value={value} onChange={onChange} style={{ width: '100%' }}>
                <option value="">Select Pharmaceutical Form</option>
                {PHARMACEUTICAL_FORM.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </StyledSelect>
        </SelectContainer>
    );
}
