"use client";

import { PatientsTable } from "@/components/PatientsTable";
import { Title } from "@/components/Title";
import { Button } from "@/components/Button";
import { Modal } from "@/components/Modal";
import { useState } from "react";
import { LayoutContainer } from "@/components/LayoutContainer";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <LayoutContainer>
      <Title title="Patients">
        <Modal 
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}   
        />
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
