import { Flex } from "@radix-ui/themes";
import { Modal } from "../Modal";
import { TextInput } from "../TextInput";
import { Button } from "../Button";
import { Controller, useForm } from "react-hook-form";
import { MedicationFormValues } from "@/@types/form-values/MedicationFormValues";
import { createMedication } from "@/services/medication-service/createMedication";
import { useState } from "react";
import { PharmaceuticalFormSelect } from "../PharmaceuticalFormSelect";
import { SnackbarNotification } from "../SnackbarNotification";

interface CreateMedicationModalProps {
    modalOpen: boolean;
    setModalOpen: (value: boolean) => void;
}

export function CreateMedicationModal({ modalOpen, setModalOpen }: CreateMedicationModalProps) {
    const [loading, setLoading] = useState(false);
    const [notification, setNotification] = useState<{ open: boolean; message: string; severity: 'success' | 'error' }>({
        open: false,
        message: '',
        severity: 'success',
    });
    
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
            setNotification({ open: true, message: 'Medication created successfully!', severity: 'success' });
            reset(); // Reseta os campos após o envio
            setTimeout(() => {
                setModalOpen(false);
            }, 2000);
        } catch (error) {
            console.error("Error creating medication:", error);
            setNotification({ open: true, message: 'Error creating medication. Please try again.', severity: 'error' });
            setTimeout(() => {
                setModalOpen(false);
            }, 2000);
        } finally {
            setModalOpen(false);
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
                        backgroundColor="var(--light-navy)"
                        color="var(--navy)"
                        padding="12px 32px"
                        fontSize="10px"
                        onClick={() => {
                            setModalOpen(false);
                            reset(); 
                        }} 
                    />

                    <Button 
                        padding="12px 32px"
                        fontSize="10px"
                        text="Done"
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

                <Controller
                    name="pharmaceutical_form"
                    control={control}
                    render={({ field }) => (
                        <PharmaceuticalFormSelect
                            value={field.value}
                            onChange={field.onChange}
                            padding="10px 15px"
                            margin="0"
                            label="Pharmaceutical Form"
                        />
                    )}   
                />

            </form>
            <SnackbarNotification
                open={notification.open}
                onClose={() => setNotification({ ...notification, open: false })}
                message={notification.message}
                severity={notification.severity}
            />
        </Modal>
    );
}
