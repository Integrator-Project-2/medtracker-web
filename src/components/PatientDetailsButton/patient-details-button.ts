import { Button as RadixButton } from "@radix-ui/themes";
import styled from "styled-components";

export const Button = styled(RadixButton)`
    background-color: transparent;
    border: none;

    & :hover {
        cursor: pointer;
    }
`;