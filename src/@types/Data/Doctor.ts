import { User } from "./User";

export interface Doctor {
    user: User;
    crm: string;
    specialty: string;
}
