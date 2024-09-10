"use client";

import Link from "next/link";
import { Button } from "../Button";
import { TextInput } from "../TextInput";
import { Title } from "../Title";
import { LoginFormContainer } from "./login-form";
import { Text } from "./login-form"
import { useForm } from "react-hook-form";
import { AuthDoctorFormValues } from "@/@types/form-values/AuthDoctorFormValues";
import { authenticateDoctor } from "@/services/users-service/authDoctor";

interface LoginFormProps {
    onAuthenticated: () => void;
}

export function LoginForm({ onAuthenticated }: LoginFormProps) {
    const { register, handleSubmit, reset, control } = useForm<AuthDoctorFormValues>({
        defaultValues: {
                email: '',
                password: '',
        },
        mode: "onChange"
    });

    const onSubmit = async (data: AuthDoctorFormValues) => {
        console.log('Attempting to authenticate: ', data);
        try {
            const result = await authenticateDoctor(data.email, data.password);
            console.log('Authentication successful:', result);
            
            localStorage.setItem('token', result.token); 
            
            onAuthenticated(); 
        } catch (error) {
            console.error("Error during authentication:", error);
        }
    };

    return (
        <LoginFormContainer>
            <Title title="Sign In" margin="0 25px" />

            <TextInput 
                label="Email"
                placeholder="pamelahalpert@email.com"
                padding="13px"
                rules={{ required: "Email is required" }}
                control={control}
                name="email"
                margin="0"
            /> 

            <TextInput 
                label="Password"
                padding="13px"
                rules={{ required: "Password is required" }}
                control={control}
                name="password"
                margin="0 0 23px"
            /> 

            <Button 
                text="Sign In"
                width="100%"
                color="var(--white)"
                backgroundColor="var(--navy)"
                padding="16px 140px"
                onClick={handleSubmit(onSubmit)}
            />

            <Text>
                Don’t have an account?
                <Link href="/register">
                    Sign Up
                </Link>
            </Text>
        </LoginFormContainer>
    )
}