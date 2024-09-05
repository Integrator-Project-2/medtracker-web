"use client";

import { LayoutContainer } from "@/components/LayoutContainer";
import { PrescriptionForm } from "@/components/PrescriptionForm";
import { SideBar } from "@/components/SideBar";
import { Title } from "@/components/Title";

export default function CreatePrescription() {
    return (
        <>
        <LayoutContainer 
            flexDirection="row" 
            maxWidth="None"
            justifyContent="space-between"
            backgroundColor="var(--white-secondary)"    
        >
            <LayoutContainer 
                flex={1}
                flexDirection="column"
                maxWidth="1007px"
                margin="0 auto"
                alignItems="start"
            >
                <Title 
                    color="var(--navy)" 
                    title="New prescription" 
                    margin="35px 0 27px"
                />

                <PrescriptionForm />

            </LayoutContainer>

            <SideBar />
        </LayoutContainer>
        </>
    )
}