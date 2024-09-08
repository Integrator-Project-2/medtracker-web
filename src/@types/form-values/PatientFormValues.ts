import { UserFormValues } from "./UserFormValues";

export interface PatientFormValues {
    cpf: string;
    user: UserFormValues;
    gender: 'M' | 'F' | 'NB' | null; 
    height: number | null;
    weight: number | null;
    allergies_and_observations: string | null;
}