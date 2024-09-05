import { StyledPrescriptionText } from "@/@types/components/PrescriptionTextProps";
import styled from "styled-components";

export const PrescriptionFormContainer = styled.div`
    background-color: var(--white);
    max-width: 678px;
    max-height: 725px;
    width: 678px;
    height: 725px;
    border: 1px solid var(--light-purple);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    padding: 36px 57px;
`;

export const PrescriptionInfoContainer = styled.div`
    width: 100%;
`;

export const PrescriptionText = styled.p<StyledPrescriptionText>`
    font-size: ${({ fontSize }) => fontSize || '16px'};
    font-weight: ${({ fontWeight }) => fontWeight || '600'};
    color: ${({ color }) => color };
    margin: ${({ margin }) => margin };
    display: ${({ display }) => display };
    align-items: center;
    justify-content: space-between;
    width: 100%;
`; 

export const PrescriptionInfo = styled.p`
    font-size: 12px;
    font-weight: 600;
    color: ${({ color }) => color };
`;

export const PrescriptionFooterContainer = styled.div`
    display: flex;
    justify-content: end;
    gap: 20px;
    width: 100%;
`;