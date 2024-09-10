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
import { registerDoctor } from "@/services/users-service/registerDoctor";

export function SignUpForm() {
    const [step, setStep] = useState(1);
    const [step1Data, setStep1Data] = useState({
        user: {
            name: '',
            email: '',
            password: '',
            phone: '',
            address: '',
            birth_date: ''
        },
        crm: '',
    });

    const { register, handleSubmit, reset, control } = useForm<RegisterDoctorFormValues>({
        defaultValues: {
            user: {
                name: '',
                email: '',
                password: '',
                phone: '',
                address: '',
                birth_date: ''
            },
            crm: '',
            specialty: '',
        },
        mode: "onChange"
    });

    const handleNextStep = (data: RegisterDoctorFormValues) => {
        console.log("testando esse divo");
        reset({
            user: {
                name: '',
                email: '',
                password: '',
                phone: '',
                address: '',
                birth_date: ''
            },
            crm: '',
            specialty: '',
        });
        setStep1Data(data);
        setStep(step + 1);
    };

    const onSubmit = async (data: RegisterDoctorFormValues) => {
        const completeData = {
            ...step1Data,
            specialty: data.specialty,
            user: {
                ...step1Data.user,
                birth_date: data.user.birth_date,
                address: data.user.address,
                phone: data.user.phone,
            }
        };
        try {
            const result = await registerDoctor(completeData);
        } catch (error) {
            console.error("Error registering doctor:", error);
        }
    };

    return (
        <SignUpFormContainer>
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
                        name="user.phone"
                        margin="0 0 23px"
                    />

                    
                </>
            )}

            {step === 1 ? (
                <Button 
                    text="Continue"
                    width="100%"
                    color="var(--white)"
                    backgroundColor="var(--navy)"
                    padding="16px 140px"
                    onClick={handleSubmit(handleNextStep)} 
                    type="button"
                />
            ) : (
                <Button 
                    text="Sign Up"
                    width="100%"
                    color="var(--white)"
                    backgroundColor="var(--navy)"
                    padding="16px 140px"
                    onClick={handleSubmit(onSubmit)}
                />
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
