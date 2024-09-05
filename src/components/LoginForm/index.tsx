"use client";

import Link from "next/link";
import { Button } from "../Button";
import { TextInput } from "../TextInput";
import { Title } from "../Title";
import { LoginFormContainer } from "./login-form";
import { Text } from "./login-form"

export function LoginForm() {
    return (
        <LoginFormContainer>
            <Title title="Sign In" />

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
                text="Sign In"
                width="100%"
                color="var(--white)"
                backgroundColor="var(--navy)"
                padding="16px 140px"
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