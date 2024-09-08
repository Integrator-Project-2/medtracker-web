import { Patient } from "@/@types/Data/Patient";
import api from "../api";

export const updatePatientDetails = async (patientId: number, data: Partial<Patient>) => {
    try {
        const response = await api.patch(`/patients-service/${patientId}/`, data);
        return response.data;
    } catch (error) {
        console.error('Error updating patient details:', error);
    }
};
