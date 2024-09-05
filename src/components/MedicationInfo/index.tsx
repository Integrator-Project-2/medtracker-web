import Image from "next/image";
import { Label, MedicationInfoContainer, MedicationInfoText, MedicationInfoTextContainer } from "./medication-info";

interface MedicationInfoProps {
    medicationName: string;
    pharmaceuticalForm: string;
}

export function MedicationInfo({ medicationName, pharmaceuticalForm }: MedicationInfoProps) {
    return (
        <MedicationInfoContainer>
            <MedicationInfoTextContainer>
                <Label>Name</Label>
                <MedicationInfoText>{medicationName}</MedicationInfoText>
            </MedicationInfoTextContainer>

            <MedicationInfoTextContainer>
                <Label>Pharmaceutical form</Label>
                <MedicationInfoText>{pharmaceuticalForm}</MedicationInfoText>
            </MedicationInfoTextContainer>
            
            <Image 
                src="x-icon.svg"
                alt="Close icon"
                width={16}
                height={16}
            />      
        </MedicationInfoContainer>
    )
}