import { styled } from "styled-components";

export const Label = styled.label<{fontSize?: string}>`
    font-size: ${({ fontSize }) => fontSize || '12px'};
    color: var(--dark-blue);
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
`;