"use client";

import { Table } from "@radix-ui/themes";
import { StyledCell, StyledCellContent, StyledColumnHeaderCell, StyledHeader, StyledRow, StyledTable } from "./prescriptions-table";
import Image from "next/image";
import { prescriptions } from "../../../utils/prescriptionsDataMock";

export function PrescriptionsTable() {
    return (
        <StyledTable>
            <StyledHeader>
                <StyledRow>
                    <StyledColumnHeaderCell>Files</StyledColumnHeaderCell>
                    <StyledColumnHeaderCell>Description</StyledColumnHeaderCell>
                    <StyledColumnHeaderCell>Date</StyledColumnHeaderCell>
                    <StyledColumnHeaderCell>Download</StyledColumnHeaderCell>
                </StyledRow>
            </StyledHeader>

            <Table.Body>
                {prescriptions.map((prescription, index) => (
                    <StyledRow key={index}>
                        <StyledCellContent>
                            <Image 
                                src='prescription-icon.svg'
                                alt={`File icon`}
                                width={28}
                                height={28}
                            />
                            {prescription.name}
                        </StyledCellContent>
                        <Table.RowHeaderCell>{prescription.description}</Table.RowHeaderCell>
                        <StyledCell>{prescription.date}</StyledCell>
                        <StyledCell>
                            <a href={prescription.downloadLink} download>
                                <Image 
                                    src='download-icon.svg'
                                    alt="Download icon"
                                    width={24}
                                    height={24}
                                />
                            </a>
                        </StyledCell>
                    </StyledRow>
                ))}
            </Table.Body>
        </StyledTable>
    );    
}
