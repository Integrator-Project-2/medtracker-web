import api from '../api';

interface CreatePrescriptionPayload {
  medication_ids: number[];
  description: string;
  patient_id: number;
  doctor_id: number;
}

export const createPrescription = async (data: CreatePrescriptionPayload) => {
    try {
        const response = await api.post('/create-medical-prescription/', data);
        return response.data;
    } catch (error) {
        console.error('Error creating prescription:', error);
    }
};