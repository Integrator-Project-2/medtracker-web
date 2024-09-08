"use client";

import { PatientsTable } from "@/components/PatientsTable";
import { Title } from "@/components/Title";
import { Button } from "@/components/Button";
import { useEffect, useState } from "react";
import { LayoutContainer } from "@/components/LayoutContainer";
import { SearchPatientModal } from "@/components/SearchPatientModal";
import { getDoctorPatients } from "@/services/patients-managment/getDoctorPatients";
import { Patient } from "@/@types/Data/Patient";
import { LoadingSpinner } from "@/components/LoadingSpinner";


export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);
  const doctorId = 34;

  useEffect(() => {
    const fetchPatients = async () => {
      setLoading(true);
      try {
        const patientsData = await getDoctorPatients(doctorId);
        console.log("pacientes do médico: ", patients);
        setPatients(patientsData);
      } catch (error) {
        console.error('Failed to fetch patients', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, [doctorId]);

  return (
    <LayoutContainer>
      <Title title="Patients">
        <SearchPatientModal
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
        {loading ? (
        <div style={{ height: "100%" }}>
          <LoadingSpinner />
        </div>
      ) : (
        <PatientsTable patients={patients} />
      )}
    </LayoutContainer>
  );
}
