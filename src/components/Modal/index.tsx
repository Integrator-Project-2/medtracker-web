import { Dialog, Flex } from "@radix-ui/themes";
import { StyledDialogContent, StyledDialogDescription, StyledDialogTitle, TitleContainer, TitleHeaderContainer } from "./modal";
import { Button } from "../Button";
import React from "react";

interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (value: boolean) => void;
  title: string;
  description: string;
  children: React.ReactNode;
  footer: React.ReactNode;
  onSubmit: () => void;
  onCancel?: () => void;
  button?: React.ReactNode;
}


export function Modal({ 
  modalOpen, 
  setModalOpen, 
  title, 
  description, 
  children, 
  button,
  footer,
  onSubmit,
  onCancel 
}: ModalProps) {
  return (
    <Dialog.Root open={modalOpen}>
      <StyledDialogContent>
        <TitleHeaderContainer>
          <TitleContainer>
            <StyledDialogTitle>{title}</StyledDialogTitle>
            <StyledDialogDescription size="2">{description}</StyledDialogDescription>
          </TitleContainer>
          {button}
        </TitleHeaderContainer>


        <Flex direction="column" gap="3">
          {children}
        </Flex>

        {footer}
      </StyledDialogContent>
    </Dialog.Root>
  );
}
