import { TextInfoContainerProps } from "@/@types/components/TextInfoContainerProps";
import { Description, Label, TextInfoContainer } from "./text-info";

interface TextInfoProps extends TextInfoContainerProps{
    label: string;
    description: string;
}

export function TextInfo({ label, description, flexDirection, gap }: TextInfoProps) {
    return(
        <TextInfoContainer flexDirection={flexDirection} gap={gap}>
            <Label>{label}</Label>
            <Description>
                {description}
            </Description>
        </TextInfoContainer>
    )
}