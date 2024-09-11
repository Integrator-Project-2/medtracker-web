export interface MedicationFormValues {
    name: string;
    pharmaceutical_form: 'tablet' | 'capsule' | 'solution' | 'liquid' | 'drops' | 'injectable' | '';
}