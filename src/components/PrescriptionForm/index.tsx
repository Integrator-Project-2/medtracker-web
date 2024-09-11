"use client";

import { StyledPrescriptionText } from "@/@types/components/PrescriptionTextProps";
import { PrescriptionFooterContainer, PrescriptionFormContainer, PrescriptionInfo, PrescriptionInfoContainer, PrescriptionText } from "./prescription-form";
import { MedicationInfo } from "../MedicationInfo";
import { Button } from "../Button";
import { useEffect, useState } from "react";
import { SearchMedicationModal } from "../SearchMedicationModal";
import { Medication } from "@/@types/Data/Medication";
import { useForm } from "react-hook-form";
import { PrescriptionFormValues } from "@/@types/form-values/PrescriptionFormValues";
import { TextArea } from "../TextArea";
import { Patient } from "@/@types/Data/Patient";
import { createPrescription } from "@/services/patients-managment/createPrescription";
import { useRouter } from 'next/navigation';
import { SnackbarNotification } from "../SnackbarNotification";

interface PrescriptionFormProps extends StyledPrescriptionText {
    patient: Patient;
}

export function PrescriptionForm({ patient }: PrescriptionFormProps) {
    const [searchMedicationModalOpen, setSearchMedicationModalOpen] = useState(false);
    const [medicationsInPrescription, setMedicationsInPrescription] = useState<Medication[]>([]);
    const [medicationsInPrescriptionIds, setMedicationsInPrescriptionIds] = useState<number[]>([]);
    const [loading, setLoading] = useState(false);
    const [prescriptionCreated, setPrescriptionCreated] = useState(false);
    const [notification, setNotification] = useState<{ open: boolean; message: string; severity: 'success' | 'error' }>({
        open: false,
        message: '',
        severity: 'success',
    });

    const router = useRouter();

    const { register, handleSubmit, reset, control } = useForm<PrescriptionFormValues>({
        defaultValues: {
            description: '',
        },
        mode: "onChange"
    });

    const addMedicationToPrescription = (medication: Medication) => {
        setMedicationsInPrescriptionIds((prevIds) => [...prevIds, medication.id]);
        setMedicationsInPrescription((prevMeds) => [...prevMeds, medication]);
    };

    const onSubmit = async (formValues: PrescriptionFormValues) => {
        
        try {
            if(patient.id) {
                const prescriptionData = {
                    medication_ids: medicationsInPrescriptionIds, 
                    description: formValues.description,
                    patient_id: patient.id,
                    doctor_id: 34 
                };
                setLoading(true);
                await createPrescription(prescriptionData);
                setNotification({ open: true, message: 'Prescription created successfully!', severity: 'success' });
                setPrescriptionCreated(true);
                reset();

                setTimeout(() => {
                    setNotification((prev) => ({ ...prev, open: false }));
                    router.push(`/patient-details/${patient.id}`);
                }, 2000);
            }
        } catch (error) {
            console.error('Error creating prescription:', error);
            setTimeout(() => {
                setNotification((prev) => ({ ...prev, open: false }));
            }, 2000);
        } finally {
            setLoading(false); 
        }
      };

    return (
        <PrescriptionFormContainer onSubmit={handleSubmit(onSubmit)}>
            <PrescriptionInfoContainer>
                <PrescriptionText margin="0 0 14px">Patient</PrescriptionText>

                <PrescriptionInfo 
                    color="var(--light-blue)"
                    margin="0 0 0 14px"
                >
                    {patient.user.name}
                </PrescriptionInfo>
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
                    disabled={loading}
                />
            </PrescriptionText>

            {medicationsInPrescription.map((medication) => (
                <MedicationInfo 
                    key={medication.id} 
                    medicationName={medication.name} 
                    pharmaceuticalForm={medication.pharmaceutical_form} 
                />
            ))}

            <PrescriptionInfoContainer>
                <PrescriptionText margin="0 0 11px 0">Description</PrescriptionText>

                <TextArea 
                    color="var(--light-blue)" 
                    padding="10px 14px" 
                    margin="0"
                    width="100%"
                    control={control}
                    {...register("description")}
                    disabled={loading}
                />
            </PrescriptionInfoContainer>
            <PrescriptionFooterContainer>
                <Button 
                    backgroundColor="var(--light-navy)" 
                    fontSize="10px"
                    color="var(--light-blue)"
                    borderRadius="8px"
                    text="Cancel"
                    padding="14px 36px"
                    disabled={loading}
                />

                <Button 
                    backgroundColor="var(--navy)" 
                    fontSize="10px"
                    color="var(--white)"
                    borderRadius="8px"
                    text="Done"
                    padding="14px 36px"
                    onClick={handleSubmit(onSubmit)}
                    loading={loading}
                />
            </PrescriptionFooterContainer>

            <SearchMedicationModal 
                modalOpen={searchMedicationModalOpen}
                setModalOpen={setSearchMedicationModalOpen}
                addMedicationToPrescription={addMedicationToPrescription}
            />

            <SnackbarNotification
                open={notification.open}
                onClose={() => setNotification({ ...notification, open: false })}
                message={notification.message}
                severity={notification.severity}
            />
        </PrescriptionFormContainer> 
    )
}