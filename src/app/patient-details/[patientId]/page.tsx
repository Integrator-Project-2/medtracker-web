"use client";

import { MedicalPrescription } from "@/@types/Data/MedicalPrescription";
import { Button } from "@/components/Button";
import { LayoutContainer } from "@/components/LayoutContainer";
import { PrescriptionsTable } from "@/components/PrescriptionsTable";
import { SideBar } from "@/components/SideBar";
import { Title } from "@/components/Title";
import { getPatientPrescriptions } from "@/services/patients-managment/getPatientPrescriptions";
import { useParams } from 'next/navigation';
import { useEffect, useState } from "react";

export default function PatientDetails() {
    const { patientId } = useParams();

    const [prescriptions, setPrescriptions] = useState<MedicalPrescription[]>([]);

    useEffect(() => {
        const fetchPrescriptions = async () => {
            if (patientId) {
                try {
                    // Converte o patientId para número, se ele for uma string
                    const numericPatientId = Array.isArray(patientId) ? Number(patientId[0]) : Number(patientId);

                    const data = await getPatientPrescriptions(numericPatientId);
                    setPrescriptions(data);
                } catch (error) {
                    console.error('Failed to fetch prescriptions:', error);
                }
            }
        };

        fetchPrescriptions();
    }, [patientId]);

    return (
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
            >
                <Title title="Patient overview">

                    <Button 
                        icon="/plus-icon.svg"
                        text="New prescription"
                        padding="13px 20px"
                    />
                </Title>

                <PrescriptionsTable prescriptions={prescriptions} />
            </LayoutContainer>

            <SideBar />
        </LayoutContainer>
    )
}