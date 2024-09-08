import { StyledPrescriptionText } from "@/@types/components/PrescriptionTextProps";
import { PrescriptionFooterContainer, PrescriptionFormContainer, PrescriptionInfo, PrescriptionInfoContainer, PrescriptionText } from "./prescription-form";
import { MedicationInfo } from "../MedicationInfo";
import { Button } from "../Button";
import { useState } from "react";
import { SearchMedicationModal } from "../SearchMedicationModal";
import { Medication } from "@/@types/Data/Medication";
import { TextInput } from "../TextInput";
import { useForm } from "react-hook-form";
import { PrescriptionFormValues } from "@/@types/form-values/PrescriptionFormValues";
import { TextArea } from "../TextArea";
import { Patient } from "@/@types/Data/Patient";
import { createPrescription } from "@/services/patients-managment/createPrescription";

interface PrescriptionFormProps extends StyledPrescriptionText {
    patient: Patient;
}

export function PrescriptionForm({ patient }: PrescriptionFormProps) {
    const [searchMedicationModalOpen, setSearchMedicationModalOpen] = useState(false);
    const [medicationsInPrescription, setMedicationsInPrescription] = useState<Medication[]>([]);
    const [medicationsInPrescriptionIds, setMedicationsInPrescriptionIds] = useState<number[]>([]);

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
            const prescriptionData = {
                medication_ids: medicationsInPrescriptionIds, 
                description: formValues.description,
                patient_id: patient.id,
                doctor_id: 34 
            };

            await createPrescription(prescriptionData);
            console.log('Prescription created successfully');
            reset();
        } catch (error) {
            console.error('Error creating prescription:', error);
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
                />

                <Button 
                    backgroundColor="var(--navy)" 
                    fontSize="10px"
                    color="var(--white)"
                    borderRadius="8px"
                    text="Done"
                    padding="14px 36px"
                    onClick={handleSubmit(onSubmit)}
                />
            </PrescriptionFooterContainer>

            <SearchMedicationModal 
                modalOpen={searchMedicationModalOpen}
                setModalOpen={setSearchMedicationModalOpen}
                addMedicationToPrescription={addMedicationToPrescription}
            />
        </PrescriptionFormContainer> 
    )
}