import api from '../api';

interface AssociateDoctorPatientPayload {
  doctorId: string;
  patientId: string;
}

export const associateDoctorPatient = async (data: AssociateDoctorPatientPayload) => {
  try {
    const response = await api.post('/api/associate-doctor-patient/', data);
    return response.data;
  } catch (error) {
    console.error('Error associating doctor and patient:', error);
  }
};
