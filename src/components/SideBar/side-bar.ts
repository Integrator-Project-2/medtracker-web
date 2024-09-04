import styled from "styled-components";

export const SideBarContainer = styled.div`
    height: 100vh;
    width: 317px;
    padding: 32px 52px 0 36px;
    background-color: var(--white);
`;

export const UserProfileContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
`;

export const TextPatientName = styled.p`
    color: var(--dark-blue);
    font-size: 16px;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    margin-bottom: 4px;
`;

export const TextPatientCPF = styled.p`
    color: var(--light-purple);
    font-size: 14px;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
`;

export const PatientDetailSectionContainer = styled.p`
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-top: 39px;
`;

export const PatientDetailSectionTitle = styled.p`
    color: var(--navy);
    font-size: 16px;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    margin-bottom: 4px;
`;