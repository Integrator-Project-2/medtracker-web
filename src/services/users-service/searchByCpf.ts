import api from '../api';

interface SearchByCpfPayload {
  cpf: string;
}

export const searchByCpf = async (data: SearchByCpfPayload) => {
  try {
    const response = await api.post('/pacients-service/search-by-cpf/', data);
    return response.data;
  } catch (error) {
    console.error('Error searching patient by CPF:', error);
  }
};