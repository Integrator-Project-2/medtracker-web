import { Modal } from "../Modal";
import { Flex } from "@radix-ui/themes";
import { TextInput } from "../TextInput";
import { Button } from "../Button";
import { InputLabel, TextInputContainer } from "../SearchMedicationModal/search-medication-modal";

interface CreateMedicationModalProps {
    modalOpen: boolean;
    setModalOpen: (value: boolean) => void;
}

export function CreateMedicationModal({ modalOpen, setModalOpen }: CreateMedicationModalProps) {
    return (
        <Modal
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            title="Create New Medication"
            description="Fill in the medication details"
            onSubmit={() => {
                // Lógica para enviar os dados de criação de medicamento
                console.log("New medication created");
                setModalOpen(false); // Fecha o modal após criar
            }}
            onCancel={() => setModalOpen(false)}
        >

            <TextInputContainer>
                <InputLabel>Name</InputLabel>
                <TextInput placeholder="Ex: Dipirona" />
            </TextInputContainer>

            <TextInputContainer>
                <InputLabel>Pharmaceutical Form</InputLabel>
                <TextInput placeholder="Ex: Tablet" />
            </TextInputContainer>
        </Modal>
    );
}
