import { UserFormValues } from "./UserFormValues";

export interface RegisterDoctorFormValues {
    user: UserFormValues;
    crm: string;
    city: string;
    state: string;
    specialty: string;
}