import styled from "styled-components";

export const ProfileInfoContainer = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 16px;
`;

export const TextContainer = styled.div`
    display: flex;
    align-items: end;
    flex-direction: column;
`;

export const ProfileNameText = styled.p`
    color: var(--navy);
    font-weight: 600;
    font-size: 14px;
    `;

export const ProfileSpecializationText = styled.p`
    color: var(--dark-blue);
    font-weight: "500";
    font-size: 12px;
`;