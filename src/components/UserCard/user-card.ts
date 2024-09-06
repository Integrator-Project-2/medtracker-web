import styled from "styled-components";
import { Card, Text } from "@radix-ui/themes";

export const CardContainer = styled(Card)`
    margin-top: 24px;
    border-radius: 8px;
    
    &:hover {
        cursor: pointer;
        background-color: var(--light-purple-with-opacity);
        border: 1.5px solid var(--light-blue);
    }
`;

export const UserCardText = styled(Text)`
    font-size: 12px;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    color: var(--dark-blue);
`;