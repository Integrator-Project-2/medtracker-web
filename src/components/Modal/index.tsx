import { Dialog, Flex, TextField } from "@radix-ui/themes";
import { StyledDialogContent, StyledDialogDescription, StyledDialogTitle } from "./modal";
import { Button } from "../Button";
import { UserCard } from "../UserCard";
import { TextInput } from "../TextInput";

interface ModalProps {
    modalOpen: boolean;
    setModalOpen: (value: boolean) => void;
}

export function Modal({ modalOpen, setModalOpen }: ModalProps) {
  return (
    <Dialog.Root open={modalOpen}>
      <StyledDialogContent>
        <StyledDialogTitle>Vinculate new Patient</StyledDialogTitle>
        <StyledDialogDescription size="2">
            Enter a valid CPF number to search for a new patient
        </StyledDialogDescription>

        <Flex direction="row" gap="3">
            <TextInput 
              width="50%"
              placeholder="000.000.000-00"
            />

            <Button 
              icon="search-icon.svg"
              color="var(--navy)"
              backgroundColor="var(--light-navy)"
              padding="10px"
            />          
        </Flex>

        <Flex direction="column">
          <UserCard />
          <UserCard />

        </Flex>


        <Flex gap="3" mt="4" justify="end">
            <Button 
                text="Cancel"
                padding="14px 41px"
                backgroundColor="var(--light-navy)"
                color="var(--navy)"
                onClick={() => setModalOpen(!modalOpen)}
            />

            <Button 
                text="Done"
                padding="14px 41px"
                onClick={() => setModalOpen(!modalOpen)}
            />

        </Flex>
      </StyledDialogContent>
    </Dialog.Root>
  );
}
