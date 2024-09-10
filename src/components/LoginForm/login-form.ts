import styled from "styled-components";
import { Text as RadixText } from "@radix-ui/themes";

export const LoginFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 341px;
    gap: 20px;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 26px;
    width: 100%;
`;

export const Text = styled(RadixText)`
    margin-top: 26px;
    font-size: 14px;
    color: var(--light-purple);
    font-weight: 500;
`;