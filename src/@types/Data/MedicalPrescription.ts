export interface MedicalPrescription {
    id: number;
    doctorId: number;          
    patientId: number;         
    medicationIds: number[];   
    description: string;       
    dose: string;              
    prescriptionFile: string;
    prescription_pdf: string;
    date: string;
}