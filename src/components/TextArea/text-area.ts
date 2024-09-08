import { StyledTextAreaProps } from "@/@types/components/StyledTextAreaProps";
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

export const TextArea = styled.textarea<StyledTextAreaProps>`
    width: ${({ width }) => width || '563px'};
    height: ${({ height }) => height || '168px'};
    border-radius: 12px;
    padding: ${({ padding }) => padding || '8px'};
    border-radius: ${({ borderRadius }) => borderRadius || '8px'};
    border: 1px solid var(--light-purple);
    color: ${({ color }) => color || 'var(--dark-blue)'};
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    resize: none;
`;