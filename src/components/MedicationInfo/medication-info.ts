import styled from "styled-components";

export const MedicationInfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0 0 14px;
    width: 100%;
`;

export const Label = styled.label`
    font-size: 12px;
    font-weight: 600;
    color: var(--dark-blue);
`;

export const MedicationInfoText = styled.p`
    font-size: 12px;
    color: var(--light-blue);
`; 

export const MedicationInfoTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;