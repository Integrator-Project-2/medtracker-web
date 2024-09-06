"use client";

import { Table } from "@radix-ui/themes";
import { StyledCell, StyledColumnHeaderCell, StyledHeader, StyledRow, StyledTable } from "./patients-table";
import Image from "next/image";
import { users } from "../../../utils/userDataMock";
import { PatientDetailsButton } from "../PatientDetailsButton";

export function PatientsTable() {
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
                {users.map((user, index) => (
                    <StyledRow key={index}>
                        <StyledCell>
                            <Image 
                                src='user-icon-avatar.svg'
                                alt={`Avatar of ${user.name}`}
                                width={28}
                                height={28}
                            />
                        </StyledCell>
                        <Table.RowHeaderCell>{user.name}</Table.RowHeaderCell>
                        <StyledCell>{user.cpf}</StyledCell>
                        <StyledCell>{user.gender}</StyledCell>
                        <StyledCell>{user.birthDate}</StyledCell>
                        <StyledCell>
                            <PatientDetailsButton />
                        </StyledCell>
                    </StyledRow>
                ))}
            </Table.Body>
        </StyledTable>
    );    
}
