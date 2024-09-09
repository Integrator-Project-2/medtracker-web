import { Patient } from "@/@types/Data/Patient";
import { useEffect, useState } from "react";
import { TextInput } from "../TextInput";
import { PatientDetailSectionContainer, PatientDetailSectionTitle } from "../SideBar/side-bar";
import { TextInfoContainer } from "../TextInfo/text-info";
import { DateInput } from "../DateInput";
import { TextArea } from "../TextArea";
import { Button } from "../Button";
import { LayoutContainer } from "../LayoutContainer";
import { useForm } from "react-hook-form";
import { PatientFormValues } from "@/@types/form-values/PatientFormValues";
import { updatePatientDetails } from "@/services/users-service/updatePatient";
import { LoadingSpinner } from "../LoadingSpinner";

interface UserInfoFormProps {
    patient: Patient;
    onSubmit: (updatedPatient: Patient) => void;
    onCancel: () => void;
}


export function UserInfoForm({ patient, onSubmit, onCancel }: UserInfoFormProps) {
    const [loading, setLoading] = useState(false);

    const { register, handleSubmit, reset, control } = useForm<PatientFormValues>({
        defaultValues: {
            cpf: patient.cpf || '',
            user: {
                name: patient.user.name || '',
                email: patient.user.email || '',
                phone: patient.user.phone || '',
                address: patient.user.address || '',
                birth_date: patient.user.birth_date || ''
            },
            gender: patient.gender || null,
            height: patient.height || null,
            weight: patient.weight || null,
            allergies_and_observations: patient.allergies_and_observations || null
        },
    });

    const onSubmitForm = async (data: Patient) => {
        try {
            if (patient.id) {
                setLoading(true);
                const updatedData: Partial<Patient> = {
                    cpf: data.cpf,
                    gender: data.gender,
                    height: data.height,
                    weight: data.weight,
                    allergies_and_observations: data.allergies_and_observations,
                    user: {
                        name: data.user.name,
                        phone: data.user.phone,
                        address: data.user.address,
                        birth_date: data.user.birth_date,
                        ...(data.user.email !== patient.user.email && { email: data.user.email }),
                    }
                };

                console.log("Dados completos: ", updatedData);
                                
                const updatedPatient = await updatePatientDetails(patient.id, updatedData);
                console.log('Patient updated successfully:', updatedPatient);
                onSubmit(updatedPatient);   
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        reset({
            cpf: patient.cpf || '',
            user: {
                name: patient.user.name || '',
                email: patient.user.email || '',
                phone: patient.user.phone || '',
                address: patient.user.address || '',
                birth_date: patient.user.birth_date || ''
            },
            gender: patient.gender || null,
            height: patient.height || null,
            weight: patient.weight || null,
            allergies_and_observations: patient.allergies_and_observations || null
        });
    }, [patient, reset]);

    return (
        <form onSubmit={handleSubmit((data) => {
            onSubmitForm(data);
        })}>
            <TextInput
                label="Name"
                {...register("user.name", { required: true })}
                placeholder="Pacient name"
                margin="0"
                control={control}
                disabled={loading}
            />

            <TextInput
                label="CPF"
                {...register("cpf", { required: true })}
                placeholder="CPF"
                margin="0"
                control={control}
                disabled={loading}
            />

            <PatientDetailSectionContainer>
                <PatientDetailSectionTitle>Contact</PatientDetailSectionTitle>

                <TextInput
                    label="Email"
                    {...register("user.email", { required: true })}
                    placeholder="Email"
                    margin="0"
                    control={control}
                    disabled={loading}
                />

                <TextInput
                    label="Phone number"
                    {...register("user.phone")}
                    placeholder="Phone number"
                    margin="0"
                    control={control}
                    disabled={loading}
                />

                <TextInput
                    label="Address"
                    {...register("user.address")}
                    placeholder="Address"
                    margin="0"
                    control={control}
                    disabled={loading}
                />
            </PatientDetailSectionContainer>

            <PatientDetailSectionContainer>
                <PatientDetailSectionTitle>Personal</PatientDetailSectionTitle>

                <TextInfoContainer 
                    flexDirection="row" 
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <DateInput
                        label="Date of birth"
                        {...register("user.birth_date")}
                        placeholder="Date of birth"
                        margin="0"
                        width="120px"
                        control={control}
                        disabled={loading}
                    />

                    <TextInput
                        label="Gender"
                        {...register("gender")}
                        placeholder="Gender"
                        margin="0"
                        width="120px"
                        control={control}
                        disabled={loading}
                    />
                </TextInfoContainer>

                <TextInfoContainer flexDirection="row" justifyContent="space-between">
                    <TextInput
                        label="Height"
                        {...register("height")}
                        placeholder="Height (m)"
                        margin="0"
                        width="120px"
                        control={control}
                        disabled={loading}
                    />

                    <TextInput
                        label="Weight"
                        {...register("weight")}
                        placeholder="Weight (kg)"
                        margin="0"
                        width="120px"
                        control={control}
                        disabled={loading}
                    />
                </TextInfoContainer>

                <TextArea
                    label="Allergies and observations"
                    {...register("allergies_and_observations")}
                    placeholder="Allergies and observations"
                    margin="0"
                    width="100%"
                    height="83px"
                    control={control}
                    disabled={loading}
                />
            </PatientDetailSectionContainer>

            <LayoutContainer
                flexDirection="row"
                height="none"
                margin="15px 0"
                justifyContent="space-between"
                maxWidth="100%"
            >
                <Button
                    backgroundColor="var(--light-navy)"
                    fontSize="10px"
                    color="var(--light-blue)"
                    borderRadius="8px"
                    text="Cancel"
                    padding="12px 36px"
                    onClick={onCancel}
                />

                <Button
                    type="submit"
                    backgroundColor="var(--navy)"
                    fontSize="12px"
                    color="var(--white)"
                    borderRadius="8px"
                    text="Done"
                    padding="12px 36px"
                    loading={loading}
                />
            </LayoutContainer>
        </form>
    );
}