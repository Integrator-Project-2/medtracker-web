import Image from "next/image";
import { CardContainer, MedicationName, PharmaceuticalForm } from "./medication-card";
import { Medication } from "@/@types/Data/Medication";
import { MedicationIcon } from "../MedicationIcon";

interface MedicationCardProps {
    medication: Medication;
}

export function MedicationCard({ medication }: MedicationCardProps) {
    return (
        <CardContainer>
            <MedicationIcon 
                color="var(--light-blue)"
                size={20}
                iconName={medication.pharmaceutical_form}
            />

            <MedicationName>{medication.name}</MedicationName>
            <PharmaceuticalForm>{medication.pharmaceutical_form}</PharmaceuticalForm>
        </CardContainer>
    )
}