import { CardContainer, MedicationName, PharmaceuticalForm } from "./medication-card";
import { Medication } from "@/@types/Data/Medication";
import { MedicationIcon } from "../MedicationIcon";
import { Flex, Radio } from "@radix-ui/themes";

interface MedicationCardProps {
    medication: Medication;
    selectedValue: string;
    setSelectedValue: (value: string) => void;
}

export function MedicationCard({ medication, selectedValue, setSelectedValue }: MedicationCardProps) {
    return (
        <CardContainer>
            <Flex align="center">
                <MedicationIcon 
                    color="var(--light-blue)"
                    size={20}
                    iconName={medication.pharmaceutical_form}
                />

                <MedicationName>{medication.name}</MedicationName>
            </Flex>
            <PharmaceuticalForm>{medication.pharmaceutical_form}</PharmaceuticalForm>

            <Radio
                value={medication.id.toString()}
                checked={selectedValue === medication.id.toString()}
                onChange={() => setSelectedValue(medication.id.toString())}
            />  
        </CardContainer>
    )
}