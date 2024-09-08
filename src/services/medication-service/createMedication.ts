import { Medication } from '@/@types/Data/Medication';
import api from '../api';

export const createMedication = async (data: Medication) => {
  try {
    const response = await api.post('/medications/', data);
    return response.data;
  } catch (error) {
    console.error('Error creating medication:', error);
  }
};
