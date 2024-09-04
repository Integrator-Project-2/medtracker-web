import { TextInfoContainerProps } from "@/@types/components/TextInfoContainerProps";
import styled from "styled-components";

export const TextInfoContainer = styled.div<TextInfoContainerProps>`
    display: flex;
    flex-direction: ${({ flexDirection }) => flexDirection || 'column'};
    gap: ${({ gap }) => gap || '6px'}
`;

export const Label = styled.label`
    color: var(--light-purple);
    font-size: 10px;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
`;

export const Description = styled.p`
    color: var(--dark-blue);
    font-size: 12px;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
`;