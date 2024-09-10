import { Doctor } from "@/@types/Data/Doctor";
import api from "../api";

export const registerDoctor = async (data: Doctor) => {
    try {
        const response = await api.post('/register-doctor/', data);
        return response.data;
    } catch (error) {
        console.error('Error registering doctor:', error);
    }
};