import { StyledPrescriptionText } from "@/@types/components/PrescriptionTextProps";
import { PrescriptionFooterContainer, PrescriptionFormContainer, PrescriptionInfoContainer, PrescriptionText } from "./prescription-form";
import { MedicationInfo } from "../MedicationInfo";
import { Button } from "../Button";
import { TextArea } from "../TextArea/text-area";
import { useState } from "react";
import { Modal } from "../Modal";
import { Flex } from "@radix-ui/themes";
import { TextInput } from "../TextInput";
import { MedicationCard } from "../MedicationCard";

interface PrescriptionFormProps extends StyledPrescriptionText {
    
}

export function PrescriptionForm({ display, alignItems, justifyContent }: PrescriptionFormProps) {
    const [modalOpen, setModalOpen] = useState(false);

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
                    icon="plus-icon-blue.svg"
                    color="var(--light-blue)"
                    borderRadius="6px"
                    text="Add Medication"
                    padding="11px 15px"
                    onClick={() => setModalOpen(!modalOpen)}
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
            <Modal 
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
                title="Medications"
                description="Search or create a medication"
                button={
                    <Button 
                        icon="plus-icon-blue.svg"
                        color="var(--light-blue)"
                        backgroundColor="var(--light-navy)"
                        padding="12px"
                        text="New Medication"
                        fontSize="9px"
                    />}
                onSubmit={() => console.log("Submit clicked")}
                onCancel={() => setModalOpen(false)}
            >
                <Flex direction="row" gap="3">
                    <TextInput 
                        width="100%"
                        placeholder="ex.:dipirona"
                        // value={cpf}
                        // onChange={(e) => setCpf(e.target.value)}
                    />
                <Button 
                    icon="search-icon.svg"
                    color="var(--navy)"
                    backgroundColor="var(--light-navy)"
                    padding="10px"
                    // onClick={handleSearch}
                />
                </Flex>

                <Flex direction="column">
                    <MedicationCard
                        medicationName="Dipirona 500mg"
                        pharmaceuticalForm="Tablet"
                    />
                </Flex>
            </Modal>
        </PrescriptionFormContainer>       
    )
}