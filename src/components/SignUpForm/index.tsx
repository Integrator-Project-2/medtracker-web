"use client";

import Link from "next/link";
import { Button } from "../Button";
import { TextInput } from "../TextInput";
import { Title } from "../Title";
import { SignUpFormContainer } from "./sign-up-form";
import { Text } from "./sign-up-form"
import { useState } from "react";
import { DateInput } from "../DateInput";
import { RegisterDoctorFormValues } from "@/@types/form-values/RegisterDoctorFormValues";
import { useForm } from "react-hook-form";

export function SignUpForm() {
    const [step, setStep] = useState(1);

    const { register, handleSubmit, reset, control } = useForm<RegisterDoctorFormValues>({
        defaultValues: {
        },
        mode: "onChange"
    });

    const handleNextStep = () => {
        setStep(step + 1);
    };

    const onSubmit = async  (data: RegisterDoctorFormValues) => {
        console.log("cadastrando doctor: ", data)
    };

    return (
        <SignUpFormContainer onSubmit={handleSubmit(onSubmit)}>
            <Title title="Sign Up" color="var(--navy)" margin="0 25px" />

            {step === 1 ? (
                <>
                    <TextInput 
                        label="Name"
                        placeholder="Pamela Halpert"
                        padding="13px"
                        rules={{ required: "Name is required" }}
                        control={control}
                        name="user.name"
                        margin="0"
                    /> 

                    <TextInput 
                        label="CRM"
                        placeholder="000000/RN"
                        padding="13px"
                        rules={{ required: "CRM is required" }}
                        control={control}
                        name="crm"
                        margin="0"
                    /> 

                    <TextInput 
                        label="Email"
                        placeholder="pamelahalpert@email.com"
                        padding="13px"
                        rules={{ required: "Email is required" }}
                        control={control}
                        name="user.email"
                        margin="0"
                    />

                    <TextInput 
                        label="Password"
                        padding="13px"
                        rules={{ required: "Password is required" }}
                        control={control}
                        name="user.password"
                        margin="0 0 23px"
                    />

                    <Button 
                        text="Continue"
                        width="100%"
                        color="var(--white)"
                        backgroundColor="var(--navy)"
                        padding="16px 140px"
                        onClick={handleNextStep}
                    />
                </>
            ) : (
                <>
                    <TextInput 
                        label="Specialty"
                        placeholder="Dermathologist"
                        padding="13px"
                        control={control}
                        name="specialty"
                        margin="0"
                    /> 

                    <DateInput 
                        label="Date of Birth"
                        placeholder="DD/MM/YYYY"
                        padding="13px"
                        control={control}
                        name="user.birth_date"
                        margin="0"
                    /> 

                    <TextInput 
                        label="Address"
                        placeholder="123 Street Name, City"
                        padding="13px"
                        control={control}
                        name="user.address"
                        margin="0"
                    /> 

                    <TextInput 
                        label="Phone Number"
                        placeholder="(00) 00000-0000"
                        padding="13px"
                        control={control}
                        name="user.birth_date"
                        margin="0 0 23px"
                    />

                    <Button 
                        text="Sign Up"
                        width="100%"
                        color="var(--white)"
                        backgroundColor="var(--navy)"
                        padding="16px 140px"
                        type="submit"
                    />
                </>
            )}

            <Text>
                Already have an account?{" "}
                <Link href="/login">
                    Sign In
                </Link>
            </Text>
        </SignUpFormContainer>
    )
}