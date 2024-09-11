"use client";

import { Table } from "@radix-ui/themes";
import { DownloadButton, StyledCell, StyledCellContent, StyledColumnHeaderCell, StyledHeader, StyledRow, StyledTable } from "./prescriptions-table";
import Image from "next/image";
import { prescriptions } from "../../../utils/prescriptionsDataMock";
import { MedicalPrescription } from "@/@types/Data/MedicalPrescription";
import { downloadBase64File } from "../../../utils/downloadBase64File";

interface PrescriptionsTableProps {
    prescriptions: MedicalPrescription[]
}

export function PrescriptionsTable({ prescriptions }: PrescriptionsTableProps) {
    return (
        <>
            {prescriptions.length === 0 ? (
                <StyledRow align="center">
                    <StyledCell colSpan={5} style={{ alignItems: 'center' }}>
                        No prescriptions found.
                    </StyledCell>
                </StyledRow>
            ) : (
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
                                        src='/prescription-icon.svg'
                                        alt={`File icon`}
                                        width={28}
                                        height={28}
                                    />
                                    Prescription-{prescription.id}.pdf
                                </StyledCellContent>
                                <Table.RowHeaderCell>{prescription.description}</Table.RowHeaderCell>
                                <StyledCell>{prescription.date}</StyledCell>
                                <StyledCell>
                                    <DownloadButton onClick={() => downloadBase64File(prescription.prescription_pdf, 'prescription.pdf')}>
                                        <Image 
                                            src='/download-icon.svg'
                                            alt="Download icon"
                                            width={24}
                                            height={24}
                                        />
                                    </DownloadButton>
                                </StyledCell>
                            </StyledRow>
                        ))}
                    </Table.Body>
                </StyledTable>  
            )}
              
        </>
    );    
}
