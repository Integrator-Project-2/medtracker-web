import { styled } from "styled-components";
import { Text as RadixText } from "@radix-ui/themes";

export const SignUpFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
    max-width: 341px;
`;

export const Text = styled(RadixText)`
    margin-top: 26px;
    font-size: 14px;
    color: var(--light-purple);
    font-weight: 500;
`;