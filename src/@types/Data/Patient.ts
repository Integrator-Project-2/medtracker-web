import { User } from "./User";

export interface Patient {
    id: number;
    cpf: string;
    user: User;
    gender: 'M' | 'F' | 'NB' | null;
    height: number | null;
    weight: number | null;
    allergies_and_observations: string | null;
    expo_push_token: string | null;
}