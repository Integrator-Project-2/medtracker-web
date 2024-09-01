"use client";

import { Header } from "@/components/Header";
import { CustomTable } from "@/components/Table";
import { Title } from "@/components/Title";
import { LayoutContainer } from "@/components/LayoutContainer";
import { Button } from "@/components/Button";
import { Modal } from "@/components/Modal";
import { useState } from "react";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Header />
      <main>
          <LayoutContainer>
            <Title>
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
            <CustomTable />
          </LayoutContainer>

      </main>
    </>
  );
}
