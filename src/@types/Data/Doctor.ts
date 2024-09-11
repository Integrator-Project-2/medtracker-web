import { User } from "./User";

export interface Doctor {
    id?: number;
    user: User;
    crm: string;
    specialty: string;
}
