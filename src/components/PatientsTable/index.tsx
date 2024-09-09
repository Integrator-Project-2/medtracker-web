"use client";

import { Table } from "@radix-ui/themes";
import { StyledCell, StyledColumnHeaderCell, StyledHeader, StyledRow, StyledTable } from "./patients-table";
import Image from "next/image";
import { PatientDetailsButton } from "../PatientDetailsButton";
import { Patient } from "@/@types/Data/Patient";

interface PatientsTableProps {
    patients: Patient[];
    onPatientDetails: (patientId: number) => void;
}

export function PatientsTable({ patients, onPatientDetails }: PatientsTableProps) {    
    return (
        <StyledTable>
            <StyledHeader>
                <StyledRow>
                    <StyledColumnHeaderCell></StyledColumnHeaderCell>
                    <StyledColumnHeaderCell>Name</StyledColumnHeaderCell>
                    <StyledColumnHeaderCell>CPF</StyledColumnHeaderCell>
                    <StyledColumnHeaderCell>Gender</StyledColumnHeaderCell>
                    <StyledColumnHeaderCell>Birth date</StyledColumnHeaderCell>
                    <StyledColumnHeaderCell>Detail</StyledColumnHeaderCell>
                </StyledRow>
            </StyledHeader>

            <Table.Body>
                {patients.map((patient, index) => (
                    <StyledRow key={index}>
                        <StyledCell>
                            <Image 
                                src='/user-icon-avatar.svg'
                                alt={`Avatar of ${patient.user.name}`}
                                width={28}
                                height={28}
                            />
                        </StyledCell>
                        <Table.RowHeaderCell>{patient.user.name}</Table.RowHeaderCell>
                        <StyledCell>{patient.cpf}</StyledCell>
                        <StyledCell>{patient.gender}</StyledCell>
                        <StyledCell>{patient.user.birth_date}</StyledCell>
                        <StyledCell>
                            <PatientDetailsButton 
                                patientId={patient.id!} 
                                onClick={() => onPatientDetails(patient.id!)}    
                            />
                        </StyledCell>
                    </StyledRow>
                ))}
            </Table.Body>
        </StyledTable>
    );    
}
