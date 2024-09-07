import api from '../api';

export const getDoctorPatients = async (doctorId: number) => {
    try {
        const response = await api.get(`/doctors/${doctorId}/patients/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching doctor patients:', error);
        throw error;
    }
};