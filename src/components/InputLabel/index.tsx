import { Label } from "./input-label";

interface InputLabelProps {
    text: string;
    fontSize?: string;
}

export function InputLabel({ text, fontSize }: InputLabelProps) {
    return(
        <Label fontSize={fontSize}>{text}</Label>
    )
}