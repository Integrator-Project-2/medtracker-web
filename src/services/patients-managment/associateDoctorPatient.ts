import api from '../api';

interface AssociateDoctorPatientPayload {
  doctor_id: number;
  patient_id: number;
}

export const associateDoctorPatient = async (data: AssociateDoctorPatientPayload) => {
  try {
    const response = await api.post('/associate-doctor-patient/', data);
    return response.data;
  } catch (error) {
    console.error('Error associating doctor and patient:', error);
  }
};
