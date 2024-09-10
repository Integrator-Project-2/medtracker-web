import api from "../api";

export const authenticateDoctor = async (email: string, password: string) => {
    try {
        const response = await api.post('/token/', {
            email,
            password,
        });
        return response.data;
    } catch (error) {
        console.error('Error authenticating doctor:', error);
    }
};