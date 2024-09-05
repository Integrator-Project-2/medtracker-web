import { LayoutContainer } from "@/components/LayoutContainer";
import { LoginForm } from "@/components/LoginForm";
import Image from "next/image";

export default function Login() {
    return (
        <LayoutContainer flexDirection="row" maxWidth="None">
            <LayoutContainer
                backgroundColor="var(--white-secondary)"
                flex={1}
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
            >
                <Image 
                    src="logo.svg"
                    alt="Logo Medtracker"
                    width={211}
                    height={30}
                />
                <Image 
                    src="doctor-image.svg"
                    width={402}
                    height={435}
                    alt="Imagem de uma médica"
                />

            </LayoutContainer>

            <LayoutContainer
                flex={1}
                backgroundColor="var(--white)"
                justifyContent="center"
            >
                <LoginForm />
            </LayoutContainer>
        </LayoutContainer>
    )
}