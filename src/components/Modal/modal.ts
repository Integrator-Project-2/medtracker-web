import { Button, Dialog } from "@radix-ui/themes";
import styled from "styled-components";

export const StyledDialogContent = styled(Dialog.Content)`
  max-width: 638px;
  padding: 38px 45px; 
  background-color: var(--white); 
  border-radius: 8px; 
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

export const StyledDialogTitle = styled(Dialog.Title)`
    color: var(--dark-blue);
    font-size: 22px;
    margin-bottom: 17px;
    `;

export const StyledDialogDescription = styled(Dialog.Description)`
    font-size: 12px;
    color: var(--light-purple);
    margin-bottom: 22px;
`;

export const StyledButton = styled(Button)`
  padding: 10px 20px;
  border-radius: 8px;
`;

