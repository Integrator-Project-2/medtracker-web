import { Flex } from "@radix-ui/themes";
import { MedicationCard } from "../MedicationCard";
import { TextInput } from "../TextInput";
import { Modal } from "../Modal";
import { Button } from "../Button";
import { CreateMedicationModal } from "../CreateMedicationModal";
import { useState } from "react";

interface SearchMedicationModalProps {
    modalOpen: boolean;
    setModalOpen: (value: boolean) => void;
}

export function SearchMedicationModal({ modalOpen, setModalOpen }: SearchMedicationModalProps) {
    const [createMedicationModalOpen, setCreateMedicationModalOpen] = useState(false);
    
    return (
        <>
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
                        onClick={() => {
                            setModalOpen(false); // fecha o modal de buscar medicamento
                            setCreateMedicationModalOpen(!createMedicationModalOpen) // abre modal de criação de medicamento
                        }}
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

            <CreateMedicationModal 
                modalOpen={createMedicationModalOpen} 
                setModalOpen={setCreateMedicationModalOpen} 
            />
        </>
    )
}