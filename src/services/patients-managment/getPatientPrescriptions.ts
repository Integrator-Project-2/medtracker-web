import api from '../api';

export const getPatientPrescriptions = async (patientId: number) => {
    try {
        const response = await api.get(`/prescriptions/patient/${patientId}/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching patient prescriptions:', error);
        throw error;
    }
};
