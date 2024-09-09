import { Flex } from "@radix-ui/themes";
import { MedicationCard } from "../MedicationCard";
import { TextInput } from "../TextInput";
import { Modal } from "../Modal";
import { Button } from "../Button";
import { CreateMedicationModal } from "../CreateMedicationModal";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { SearchMedicationFormValues } from "@/@types/form-values/SearchMedicationFormValues";
import { searchMedicationByName } from "@/services/medication-service/searchMedicationByName";
import { Medication } from "@/@types/Data/Medication";
import { LoadingSpinner } from "../LoadingSpinner";

interface SearchMedicationModalProps {
    modalOpen: boolean;
    setModalOpen: (value: boolean) => void;
    addMedicationToPrescription: (medication: Medication) => void;
}

export function SearchMedicationModal({ modalOpen, setModalOpen, addMedicationToPrescription }: SearchMedicationModalProps) {
    const [createMedicationModalOpen, setCreateMedicationModalOpen] = useState(false);
    const [selectedMedication, setSelectedMedication] = useState<Medication | null>(null);
    const [medications, setMedications] = useState<Medication[]>([]);
    const [loading, setLoading] = useState(false);
    const [searchAttempted, setSearchAttempted] = useState(false);


    const { register, handleSubmit, reset, control } = useForm<SearchMedicationFormValues>({
        defaultValues: {
            medicationName: '',
        },
        mode: "onChange"
    });

    const addMedicationInPrescription = () => {
        if (selectedMedication) {
            addMedicationToPrescription(selectedMedication);
            setModalOpen(false);
        }
    };

    const onSubmit = async (data: SearchMedicationFormValues) => {
        try {        
            setLoading(true);  
            setSearchAttempted(true);  
            const medications = await searchMedicationByName(data.medicationName);
    
            setMedications(medications);

            reset(); // Reseta os campos após a busca

            console.log("Medications encontrados: ", JSON.stringify(medications));
        } catch (error) {
            console.error('Error searching for medication:', error);
        } finally {
            setLoading(false); 
        }
    };
    
    return (
        <>
            <Modal 
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
                title="Medications"
                description="Search or create a medication"
                button={
                    <Button 
                        icon="/plus-icon-blue.svg"
                        color="var(--light-blue)"
                        backgroundColor="var(--light-navy)"
                        padding="12px"
                        text="New Medication"
                        fontSize="9px"
                        onClick={() => {
                            setModalOpen(false); 
                            setCreateMedicationModalOpen(!createMedicationModalOpen)
                        }}
                    />}
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
                            disabled={!selectedMedication}
                            onClick={addMedicationInPrescription}
                            color="var(--white)"
                        />
                    </Flex>
                }
                onSubmit={() => console.log("Submit clicked")}
                onCancel={() => setModalOpen(false)}
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Flex direction="row" gap="3">
                        <TextInput 
                            placeholder="Ex: Dipirona"
                            margin="0"
                            padding="10px 14px"
                            control={control}
                            {...register("medicationName")}
                            width="100%"
                        />

                        <Button 
                            icon="/search-icon.svg"
                            color="var(--navy)"
                            backgroundColor="var(--light-navy)"
                            padding="10px"
                            type="submit"
                            onClick={handleSubmit(onSubmit)}
                        />
                    </Flex>
                </form>

                <Flex direction="column">
                {loading ? ( 
                    <LoadingSpinner />
                ) : medications.length > 0 ? (  
                    medications.map((medication, index) => (
                        <MedicationCard 
                            key={index} 
                            medication={medication} 
                            selectedValue={selectedMedication?.id.toString() || ""}
                            setSelectedValue={() => setSelectedMedication(medication)}
                        />
                    ))
                ) : (
                    searchAttempted && <p>No medication found.</p> 
                )}
                </Flex>
            </Modal>

            <CreateMedicationModal 
                modalOpen={createMedicationModalOpen} 
                setModalOpen={setCreateMedicationModalOpen} 
            />
        </>
    )
}