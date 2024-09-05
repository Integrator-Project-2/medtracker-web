"use client";

import { PatientsTable } from "@/components/PatientsTable";
import { Title } from "@/components/Title";
import { Button } from "@/components/Button";
import { Modal } from "@/components/Modal";
import { useState } from "react";
import { LayoutContainer } from "@/components/LayoutContainer";
import { Flex } from "@radix-ui/themes";
import { TextInput } from "@/components/TextInput";
import { UserCard } from "@/components/UserCard";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <LayoutContainer>
      <Title title="Patients">
      <Modal 
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        title="Vinculate new Patient"
        description="Enter a valid CPF number to search for a new patient"
        onSubmit={() => console.log("Submit clicked")}
        onCancel={() => setModalOpen(false)}
      >
        <Flex direction="row" gap="3">
          <TextInput 
            width="50%"
            placeholder="000.000.000-00"
            // value={cpf}
            // onChange={(e) => setCpf(e.target.value)}
          />
          <Button 
            icon="search-icon.svg"
            color="var(--navy)"
            backgroundColor="var(--light-navy)"
            padding="10px"
            // onClick={handleSearch}
          />
        </Flex>

        <Flex direction="column">
          <UserCard />
          <UserCard />
        </Flex>
      </Modal>
        <Button 
          icon="plus-icon.svg"
          padding="13px 20px"
          borderRadius="8px"
          text="New patient"
          onClick={() => setModalOpen(!modalOpen)}
        />
      </Title>
      <PatientsTable />
    </LayoutContainer>
  );
}
