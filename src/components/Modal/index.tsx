import { Dialog, Flex } from "@radix-ui/themes";
import { StyledDialogContent, StyledDialogDescription, StyledDialogTitle } from "./modal";
import { Button } from "../Button";

interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (value: boolean) => void;
  title: string;
  description: string;
  children: React.ReactNode;
  onSubmit: () => void;
  onCancel?: () => void;
}


export function Modal({ modalOpen, setModalOpen, title, description, children, onSubmit, onCancel }: ModalProps) {
  return (
    <Dialog.Root open={modalOpen}>
      <StyledDialogContent>
        <StyledDialogTitle>{title}</StyledDialogTitle>
        <StyledDialogDescription size="2">{description}</StyledDialogDescription>

        <Flex direction="column" gap="3">
          {children}
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Button 
            text="Cancel"
            padding="14px 41px"
            backgroundColor="var(--light-navy)"
            color="var(--navy)"
            onClick={onCancel || (() => setModalOpen(false))} 
          />

          <Button 
            text="Done"
            padding="14px 41px"
            onClick={onSubmit} 
          />
        </Flex>
      </StyledDialogContent>
    </Dialog.Root>
  );
}
