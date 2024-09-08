import api from '../api';
import { MedicationFormValues } from '@/@types/form-values/MedicationFormValues';

export const createMedication = async (data: MedicationFormValues) => {
  try {
    const response = await api.post('/medications/', data);
    return response.data;
  } catch (error) {
    console.error('Error creating medication:', error);
  }
};
