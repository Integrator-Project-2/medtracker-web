"use client";

import { PatientsTable } from "@/components/PatientsTable";
import { Title } from "@/components/Title";
import { Button } from "@/components/Button";
import { useEffect, useState } from "react";
import { LayoutContainer } from "@/components/LayoutContainer";
import { SearchPatientModal } from "@/components/SearchPatientModal";
import { getDoctorPatients } from "@/services/patients-managment/getDoctorPatients";
import { Patient } from "@/@types/Data/Patient";

import { useRouter } from 'next/navigation';
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { PageSkeleton } from "@/components/PageSkeleton";
import { useDoctor } from "@/context/DoctorContext";


export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingDetails, setLoadingDetails] = useState(false);
  const { doctor } = useDoctor();
  const router = useRouter();


  const fetchPatients = async () => {
    if (!doctor || !doctor.id) {
      console.error("Doctor is not available.");
      setLoading(false); 
      return;
    }


    setLoading(true);
    try {
      const patientsData = await getDoctorPatients(doctor.id!);
      console.log("pacientes do médico: ", patients);
      setPatients(patientsData);
    } catch (error) {
      console.error('Failed to fetch patients', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePatientDetails = async (patientId: number) => {
    setLoadingDetails(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    router.push(`/patient-details/${patientId}`); 
    setLoadingDetails(false); 
  };


  useEffect(() => {
    if (doctor?.user.id) { 
      fetchPatients();
    }
  }, [doctor]);

  return (
    <LayoutContainer>
      <Title title="Patients">
        <SearchPatientModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          onPatientAssociated={fetchPatients}
        />
        <Button 
          icon="plus-icon.svg"
          padding="13px 20px"
          borderRadius="8px"
          text="New patient"
          onClick={() => setModalOpen(!modalOpen)}
          loading={loading}
        />
        </Title>
        {loading ? (
          <PageSkeleton />
        ) : loadingDetails ? ( 
          <div style={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
            <LoadingSpinner size={50} />
          </div>
        ) : (
          <PatientsTable patients={patients} onPatientDetails={handlePatientDetails} />
        )}
    </LayoutContainer>
  );
}
