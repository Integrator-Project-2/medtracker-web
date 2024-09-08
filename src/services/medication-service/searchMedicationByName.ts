import { Medication } from '@/@types/Data/Medication';
import api from '../api';

export const searchMedicationByName = async (name: string): Promise<Medication[]> => {
    try {
        const response = await api.get(`/medications/?name=${name}`);
        return response.data;
    } catch (error) {
        console.error('Error searching medication by name:', error);
        return []; 
    }
};