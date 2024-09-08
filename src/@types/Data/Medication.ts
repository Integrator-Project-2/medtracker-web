export interface Medication {
    id: number;
    name: string;
    pharmaceutical_form: 'tablet' | 'capsule' | 'solution' | 'liquid' | 'drops' | 'injectable';
    medical_prescripion_id?: number | null;
}