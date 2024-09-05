"use client";

import Link from "next/link";
import { Button } from "../Button";
import { TextInput } from "../TextInput";
import { Title } from "../Title";
import { SignUpFormContainer } from "./sign-up-form";
import { Text } from "./sign-up-form"
import { useState } from "react";
import { DateInput } from "../DateInput";

export function SignUpForm() {
    const [step, setStep] = useState(1);

    const handleNextStep = () => {
        setStep(step + 1);
    };

    return (
        <SignUpFormContainer>
            <Title title="Sign Up" color="var(--navy)" />

            {step === 1 ? (
                <>
                    <TextInput 
                        label="Name"
                        placeholder="Pamela Halpert"
                        padding="13px"
                    /> 

                    <TextInput 
                        label="CRM"
                        placeholder="000000/RN"
                        padding="13px"
                    /> 

                    <TextInput 
                        label="Email"
                        placeholder="pamelahalpert@email.com"
                        padding="13px"
                    />

                    <TextInput 
                        label="Password"
                        padding="13px"
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
                    <DateInput 
                        label="Date of Birth"
                        placeholder="DD/MM/YYYY"
                        padding="13px"
                    /> 

                    <TextInput 
                        label="Address"
                        placeholder="123 Street Name, City"
                        padding="13px"
                    /> 

                    <TextInput 
                        label="Phone Number"
                        placeholder="(00) 00000-0000"
                        padding="13px"
                    />

                    <Button 
                        text="Sign Up"
                        width="100%"
                        color="var(--white)"
                        backgroundColor="var(--navy)"
                        padding="16px 140px"
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