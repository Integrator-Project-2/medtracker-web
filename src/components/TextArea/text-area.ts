import styled from "styled-components";

export const TextAreaContainer = styled.div<{ margin?: string }>`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 5px;
    margin: ${({ margin }) => margin || '37px'};
    justify-content: center;
    width: 100%;
    font-family: 'Poppins', sans-serif;
`;

export const TextArea = styled.textarea`
    width: 563px;
    height: 168px;
    border-radius: 12px;
    padding: 12px;
`;