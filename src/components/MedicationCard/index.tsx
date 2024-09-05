import Image from "next/image";
import { CardContainer, MedicationName, PharmaceuticalForm } from "./medication-card";

interface MedicationCardProps {
    medicationName: string;
    pharmaceuticalForm: string;
}

export function MedicationCard({ medicationName, pharmaceuticalForm }: MedicationCardProps) {
    return (
        <CardContainer>
            <Image 
               src="tablet-medication-icon.svg"
               alt="Ícone de medicação em tablete"
               width={20}
               height={20} 
            />

            <MedicationName>{medicationName}</MedicationName>
            <PharmaceuticalForm>{pharmaceuticalForm}</PharmaceuticalForm>
        </CardContainer>
    )
}