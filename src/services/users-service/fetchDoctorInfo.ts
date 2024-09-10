import api from "../api";

export const fetchDoctorInfo = async (userId: string) => {
    try {
        const response = await api.get(`/users/linked_doctor/${userId}/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching linked doctor:', error);
    }
};