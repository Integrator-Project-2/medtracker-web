import styled from "styled-components";
import { Card, Text } from "@radix-ui/themes";

export const CardContainer = styled(Card)`
    margin-top: 24px;
    border-radius: 8px;
    border: 1.5px solid var(--light-blue);
    
    &:hover {
        cursor: pointer;
        background-color: var(--light-purple-with-opacity);
    }
`;

export const UserCardText = styled(Text)`
    font-size: 12px;
    color: var(--dark-blue);
    font-weight: 500;
`;