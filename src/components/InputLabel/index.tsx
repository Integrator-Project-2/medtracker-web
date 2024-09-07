import { Label } from "./input-label";

interface InputLabelProps {
    text: string;
}

export function InputLabel({ text }: InputLabelProps) {
    return(
        <Label>{text}</Label>
    )
}