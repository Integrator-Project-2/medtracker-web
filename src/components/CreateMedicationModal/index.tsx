import { Flex } from "@radix-ui/themes";
import { Modal } from "../Modal";
import { TextInput } from "../TextInput";
import { Button } from "../Button";
import { useForm } from "react-hook-form";
import { MedicationFormValues } from "@/@types/form-values/MedicationFormValues";
import { createMedication } from "@/services/medication-service/createMedication";
import { useState } from "react";

interface CreateMedicationModalProps {
    modalOpen: boolean;
    setModalOpen: (value: boolean) => void;
}

export function CreateMedicationModal({ modalOpen, setModalOpen }: CreateMedicationModalProps) {
    const [loading, setLoading] = useState(false);
    
    const { register, handleSubmit, reset, control } = useForm<MedicationFormValues>({
        defaultValues: {
            name: '',
            pharmaceutical_form: ''
        },
        mode: "onChange"
    });

    const onSubmit = async  (data: MedicationFormValues) => {
        const medication: MedicationFormValues = {
            name: data.name,
            pharmaceutical_form: data.pharmaceutical_form as 'tablet' | 'capsule' | 'solution' | 'liquid' | 'drops' | 'injectable',
        };

        try {
            setLoading(true); 
            const result = await createMedication(medication);
            console.log("New medication created", result);
            reset(); // Reseta os campos após o envio
        } catch (error) {
            console.error("Error creating medication:", error);
        } finally {
            setModalOpen(false);
            setLoading(false); 
        }
    };

    return (
        <Modal
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            title="Create New Medication"
            description="Fill in the medication details"
            footer={
                <Flex
                 gap="3" mt="4" justify="end">
                    <Button 
                        text="Cancel"
                        padding="14px 41px"
                        backgroundColor="var(--light-navy)"
                        color="var(--navy)"
                        onClick={() => {
                            setModalOpen(false);
                            reset(); 
                        }} 
                    />

                    <Button 
                        text="Done"
                        padding="14px 41px"
                        type="submit" 
                        loading={loading}
                        onClick={handleSubmit(onSubmit)}
                    />
                </Flex>
            }
            onSubmit={handleSubmit(onSubmit)}
            onCancel={() => {
                setModalOpen(false);
                reset();
            }}
        >

            <form onSubmit={handleSubmit(onSubmit)}>
                <TextInput 
                    label="Name"
                    placeholder="Ex: Dipirona"
                    margin="0 0 17px"
                    padding="10px 15px"
                    control={control}
                    name="name"
                    rules={{ required: "Name is required" }}
                />

                <TextInput 
                    label="Pharmaceutical Form"
                    placeholder="Ex: Tablet"
                    margin="0 0 17px"
                    padding="10px 15px"
                    control={control}
                    {...register("pharmaceutical_form", { required: "Pharmaceutical Form is required" })}
                    name="pharmaceutical_form"
                />
            </form>
            
        </Modal>
    );
}
