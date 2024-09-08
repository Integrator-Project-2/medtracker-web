import { Flex } from "@radix-ui/themes";
import { Button } from "../Button";
import { Modal } from "../Modal";
import { TextInput } from "../TextInput";
import { UserCard } from "../UserCard";
import { useState } from "react";
import { searchByCpf } from "@/services/users-service/searchByCpf";
import { Patient } from "@/@types/Data/Patient";
import { associateDoctorPatient } from "@/services/patients-managment/associateDoctorPatient";

interface SearchPatientModalProps {
    modalOpen: boolean;
    setModalOpen: (value: boolean) => void;
}

export function SearchPatientModal({ modalOpen, setModalOpen }: SearchPatientModalProps) {
    const [cpf, setCpf] = useState('');
    const [patientData, setPatientData] = useState<Patient>({} as Patient);
    const [selectedValue, setSelectedValue] = useState<string>("");

    const handleSearch = async () => {
        try {
          const data = await searchByCpf({ cpf });
          setPatientData(data);
        } catch (err) {
          setPatientData({} as Patient); 
        }
    };

    const handleSubmit = async () => {
        if (selectedValue) {
            const payload = {
                doctor_id: 34, // ID do médico fixo
                patient_id: Number(selectedValue),
            };

            try {
                const response = await associateDoctorPatient(payload);
                console.log('Associação realizada:', response);
            } catch (error) {
                console.error('Erro ao associar médico e paciente:', error);
            } finally {
                setModalOpen(false);
            }
        }
    };
    
    return (
        <Modal 
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            title="Vinculate new Patient"
            description="Enter a valid CPF number to search for a new patient"
            onSubmit={handleSubmit}
            onCancel={() => setModalOpen(false)}
            footer={
                <Flex gap="3" mt="4" justify="end">
                    <Button 
                        text="Cancel"
                        padding="14px 41px"
                        backgroundColor="var(--light-navy)"
                        color="var(--navy)"
                        onClick={() => setModalOpen(false)} 
                    />

                    <Button 
                        text="Done"
                        padding="14px 41px"
                        type="submit" 
                        disabled={selectedValue === ""}
                        onClick={handleSubmit}
                    />
                </Flex>
            }
        >
            <Flex direction="row" gap="3">
                <TextInput 
                    width="100%"
                    placeholder="000.000.000-00"
                    margin="0px"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                />
                <Button 
                    icon="search-icon.svg"
                    color="var(--navy)"
                    backgroundColor="var(--light-navy)"
                    padding="10px"
                    onClick={handleSearch}
                />
            </Flex>

            <Flex direction="column">
                {patientData && patientData.id ? (  
                    <UserCard 
                        patient={patientData} 
                        selectedValue={selectedValue.toString()}
                        setSelectedValue={setSelectedValue}    
                    />
                ) : (
                    <p>No patient found.</p> 
                )}
            </Flex>
        </Modal>
    );
}

