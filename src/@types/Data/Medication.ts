export interface Medication {
    name: string;
    pharmaceutical_form: 'tablet' | 'capsule' | 'solution' | 'liquid' | 'drops' | 'injectable';
    medical_prescripion_id?: number | null;
}