"use client";

import { Patient } from "@/@types/Data/Patient";
import { LayoutContainer } from "@/components/LayoutContainer";
import { PrescriptionForm } from "@/components/PrescriptionForm";
import { SideBar } from "@/components/SideBar";
import { Title } from "@/components/Title";
import { getPatientDetails } from "@/services/users-service/getPatientDetails";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CreatePrescription() {
    const { patientId } = useParams();
    const [patient, setPatient] = useState<Patient>({} as Patient);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPatientDetails = async () => {
            if (patientId) {
                try {
                    const numericPatientId = Array.isArray(patientId) ? Number(patientId[0]) : Number(patientId);
                    const data = await getPatientDetails(numericPatientId);
                    setPatient(data);
                } catch (error) {
                    console.error('Failed to fetch patient details:', error);
                } finally {
                    setIsLoading(false); 
                }
            }
        };

        fetchPatientDetails();
    }, [patientId]);


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

                {isLoading ? (
                    <p>Loading patient details...</p> // Mostra uma mensagem de carregamento
                ) : (
                    <PrescriptionForm patient={patient} />
                )}

            </LayoutContainer>

            <SideBar patient={patient} />
        </LayoutContainer>
        </>
    )
}