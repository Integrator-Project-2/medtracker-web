import { Flex } from "@radix-ui/themes";
import { Button } from "../Button";
import { Modal } from "../Modal";
import { TextInput } from "../TextInput";
import { UserCard } from "../UserCard";
import { useState } from "react";
import { searchByCpf } from "@/services/users-service/searchByCpf";
import { Patient } from "@/@types/Data/Patient";
import { associateDoctorPatient } from "@/services/patients-managment/associateDoctorPatient";
import { useForm } from "react-hook-form";
import { SearchPatientFormValues } from "@/@types/form-values/SearchPatientFormValues";
import { LoadingSpinner } from "../LoadingSpinner";
import { SnackbarNotification } from "../SnackbarNotification";
import { useDoctor } from "@/context/DoctorContext";

interface SearchPatientModalProps {
    modalOpen: boolean;
    setModalOpen: (value: boolean) => void;
    onPatientAssociated: () => void;
}

export function SearchPatientModal({ modalOpen, setModalOpen, onPatientAssociated }: SearchPatientModalProps) {
    const [patientData, setPatientData] = useState<Patient>({} as Patient);
    const [selectedValue, setSelectedValue] = useState<string>("");
    const [searchAttempted, setSearchAttempted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [buttonLoading, setButtonLoading] = useState(false);
    const [showUserCard, setShowUserCard] = useState(false);

    const [notification, setNotification] = useState<{ open: boolean; message: string; severity: 'success' | 'error' }>({
        open: false,
        message: '',
        severity: 'success',
    });

    const { register, handleSubmit, reset, control, watch } = useForm<SearchPatientFormValues>({
        defaultValues: {
            cpf: '',
        },
        mode: "onChange"
    });

    const handleSearch = async () => {
        if (cpf) {
            setSearchAttempted(true);
            setLoading(true);
            try {
                const data = await searchByCpf({ cpf });
                setPatientData(data);
                setShowUserCard(true);
            } catch (err) {
                setPatientData({} as Patient);
                setShowUserCard(false);
            } finally {
                setLoading(false); 
            }
        }
    };

    const cpf = watch("cpf");

    const { doctor } = useDoctor();

    const onSubmit = async () => {
        if (selectedValue && doctor?.id) {
            const payload = {
                doctor_id: doctor?.id, // ID do médico fixo
                patient_id: Number(selectedValue),
            };

            setButtonLoading(true);
            try {
                const response = await associateDoctorPatient(payload);
                
                setNotification({ open: true, message: 'Patient associated successfully!', severity: 'success' });

                reset();
                onPatientAssociated();
                setModalOpen(false);
            } catch (error) {
                console.error('Erro ao associar médico e paciente:', error);
                setNotification({ open: true, message: 'Failed to associate patient. Please try again.', severity: 'error' });
            } finally {
                setModalOpen(false);
                setButtonLoading(false); 
            }
        }
    };
    
    return (
        <Modal 
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            title="Vinculate new Patient"
            description="Enter a valid CPF number to search for a new patient"
            onSubmit={onSubmit}
            onCancel={() => setModalOpen(false)}
            footer={
                <Flex gap="3" mt="4" justify="end">
                    <Button 
                        text="Cancel"
                        padding="12px 32px"
                        backgroundColor="var(--light-navy)"
                        color="var(--navy)"
                        onClick={() => setModalOpen(false)} 
                        fontSize="10px"
                    />

                    <Button 
                        text="Done"
                        padding="12px 32px"
                        type="submit" 
                        disabled={selectedValue === ""}
                        onClick={onSubmit}
                        loading={buttonLoading}
                        fontSize="10px"
                    />
                </Flex>
            }
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <Flex direction="row" gap="3">
                    <TextInput 
                        width="100%"
                        placeholder="000.000.000-00"
                        margin="0px"
                        control={control}
                        {...register("cpf")}
                    />
                    <Button 
                        icon="/search-icon.svg"
                        color="var(--navy)"
                        backgroundColor="var(--light-navy)"
                        padding="10px"
                        onClick={handleSearch}
                    />
                </Flex>
            </form>

            <Flex direction="column" align="center" justify="center" style={{ height: '100%', width: "100%" }}>
                {loading ? ( 
                    <LoadingSpinner />
                ) : showUserCard && patientData && patientData.id ? (  
                    <UserCard 
                        patient={patientData} 
                        selectedValue={selectedValue.toString()}
                        setSelectedValue={setSelectedValue}    
                    />
                ) : (
                    searchAttempted && <p>No patient found.</p> 
                )}
            </Flex>

            <SnackbarNotification
                open={notification.open}
                onClose={() => setNotification({ ...notification, open: false })}
                message={notification.message}
                severity={notification.severity}
            />
        </Modal>
    );
}

