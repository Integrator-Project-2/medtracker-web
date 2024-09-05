import { Modal } from "../Modal";
import { TextInput } from "../TextInput";

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
            
            <TextInput 
                label="Name"
                placeholder="Ex: Dipirona"
            />

            <TextInput 
                label="Pharmaceutical Form"
                placeholder="Ex: Tablet"
            />
        </Modal>
    );
}
