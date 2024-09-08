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

interface UserInfoFormProps {
    patient: Patient;
    onSubmit: (updatedPatient: Patient) => void;
    onCancel: () => void;
}


export function UserInfoForm({ patient, onSubmit, onCancel }: UserInfoFormProps) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<Patient>({
        defaultValues: patient,
    });

    const onSubmitForm = (data: Patient) => {
        console.log('uhuuuul: ' + JSON.stringify(data));
        onSubmit(data);
    };

    useEffect(() => {
        reset(patient);
    }, [reset]);

    return (
        <form onSubmit={handleSubmit((data) => {
            onSubmitForm(data);
        })}>
            <TextInput
                label="Name"
                {...register("user.name", { required: true })}
                placeholder="Pacient name"
                margin="0"
            />
            {errors.user?.name && <span>This field is required</span>}

            <TextInput
                label="CPF"
                {...register("cpf", { required: true })}
                placeholder="CPF"
                margin="0"
            />
            {errors.cpf && <span>This field is required</span>}

            <PatientDetailSectionContainer>
                <PatientDetailSectionTitle>Contact</PatientDetailSectionTitle>

                <TextInput
                    label="Email"
                    {...register("user.email", { required: true })}
                    placeholder="Email"
                    margin="0"
                />
                {errors.user?.email && <span>This field is required</span>}

                <TextInput
                    label="Phone number"
                    {...register("user.phone")}
                    placeholder="Phone number"
                    margin="0"
                />

                <TextInput
                    label="Address"
                    {...register("user.address")}
                    placeholder="Address"
                    margin="0"
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
                    />

                    <TextInput
                        label="Gender"
                        {...register("gender")}
                        placeholder="Gender"
                        margin="0"
                        width="120px"
                    />
                </TextInfoContainer>

                <TextInfoContainer flexDirection="row" justifyContent="space-between">
                    <TextInput
                        label="Height"
                        {...register("height")}
                        placeholder="Height (m)"
                        margin="0"
                        width="120px"
                    />

                    <TextInput
                        label="Weight"
                        {...register("weight")}
                        placeholder="Weight (kg)"
                        margin="0"
                        width="120px"
                    />
                </TextInfoContainer>

                <TextArea
                    label="Allergies and observations"
                    {...register("allergies_and_observations")}
                    placeholder="Allergies and observations"
                    margin="0"
                    width="100%"
                    height="83px"
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
                />
            </LayoutContainer>

        </form>
    );
}