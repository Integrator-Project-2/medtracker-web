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
import { fetchDoctorInfo } from "@/services/users-service/fetchDoctorInfo";
import { useDoctor } from "@/context/DoctorContext";
import { useState } from "react";
import { SnackbarNotification } from "../SnackbarNotification";

interface LoginFormProps {
    onAuthenticated: () => void;
}

export function LoginForm({ onAuthenticated }: LoginFormProps) {
    const [loading, setLoading] = useState(false);
    const [notification, setNotification] = useState<{ open: boolean; message: string; severity: 'success' | 'error' }>({
        open: false,
        message: '',
        severity: 'success',
    });

    const { register, handleSubmit, reset, control } = useForm<AuthDoctorFormValues>({
        defaultValues: {
                email: '',
                password: '',
        },
        mode: "onChange"
    });

    const { setDoctor } = useDoctor();

    const onSubmit = async (data: AuthDoctorFormValues) => {
        try {
            setLoading(true);
            const result = await authenticateDoctor(data.email, data.password);
            
            localStorage.setItem('token', result.access); 
            localStorage.setItem('userId', result.user_id); 

            const doctorData = await fetchDoctorInfo(result.user_id);

            setDoctor(doctorData);

            setNotification({ open: true, message: 'Authenticated successfully!', severity: 'success' });

            onAuthenticated(); 
        } catch (error) {
            console.error("Error during authentication:", error);
            setNotification({ open: true, message: 'Error during authentication. Please check your credentials.', severity: 'error' });
        } finally {
            setLoading(false);
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
                type="password"
            /> 

            <Button 
                text="Sign In"
                width="100%"
                color="var(--white)"
                backgroundColor="var(--navy)"
                padding="16px 140px"
                onClick={handleSubmit(onSubmit)}
                loading={loading}
            />

            <Text>
                Don’t have an account?
                <Link href="/register">
                    Sign Up
                </Link>
            </Text>

            <SnackbarNotification
                open={notification.open}
                onClose={() => setNotification({ ...notification, open: false })}
                message={notification.message}
                severity={notification.severity}
            />
        </LoginFormContainer>
    )
}