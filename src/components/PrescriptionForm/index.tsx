import { StyledPrescriptionText } from "@/@types/components/PrescriptionTextProps";
import { PrescriptionFooterContainer, PrescriptionFormContainer, PrescriptionInfoContainer, PrescriptionText } from "./prescription-form";
import { MedicationInfo } from "../MedicationInfo";
import { Button } from "../Button";
import { TextArea } from "../TextArea/text-area";
import { useState } from "react";
import { SearchMedicationModal } from "../SearchMedicationModal";

interface PrescriptionFormProps extends StyledPrescriptionText {
    
}

export function PrescriptionForm({ display, alignItems, justifyContent }: PrescriptionFormProps) {
    const [searchMedicationModalOpen, setSearchMedicationModalOpen] = useState(false);

    return (
        <PrescriptionFormContainer>
            <PrescriptionInfoContainer>
                <PrescriptionText>Patient</PrescriptionText>
                <PrescriptionText 
                    color="var(--light-blue)"
                    fontSize="12px"
                    margin="0 0 0 14px" 
                >
                    Pamela Halpert
                </PrescriptionText>
            </PrescriptionInfoContainer>
            <PrescriptionText 
                display="flex"
                alignItems="center"
                justifyContent="space-between"    
            >
                Medication
                <Button 
                    backgroundColor="var(--light-navy)" 
                    fontSize="10px"
                    icon="/plus-icon-blue.svg"
                    color="var(--light-blue)"
                    borderRadius="6px"
                    text="Add Medication"
                    padding="11px 15px"
                    onClick={() => setSearchMedicationModalOpen(!searchMedicationModalOpen)}
                />
            </PrescriptionText>

            <MedicationInfo medicationName="Dipirona 500mg" pharmaceuticalForm="Tablet" />
            <MedicationInfo medicationName="Dipirona 500mg" pharmaceuticalForm="Tablet" />

            <PrescriptionInfoContainer>
                <PrescriptionText margin="0 0 11px 0">Description</PrescriptionText>

                <TextArea />
            </PrescriptionInfoContainer>

            <PrescriptionFooterContainer>
                <Button 
                    backgroundColor="var(--light-navy)" 
                    fontSize="10px"
                    color="var(--light-blue)"
                    borderRadius="8px"
                    text="Cancel"
                    padding="14px 36px"
                />

                <Button 
                    backgroundColor="var(--navy)" 
                    fontSize="10px"
                    color="var(--white)"
                    borderRadius="8px"
                    text="Done"
                    padding="14px 36px"
                />
            </PrescriptionFooterContainer>

            <SearchMedicationModal 
                modalOpen={searchMedicationModalOpen}
                setModalOpen={setSearchMedicationModalOpen}
            />
        </PrescriptionFormContainer>       
    )
}