import api from "../api";

export const getPatientDetails = async (patientId: number) => {
    try {
        const response = await api.get(`/patients-service/${patientId}/`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch patient details');
    }
};