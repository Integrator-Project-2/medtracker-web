"use client";

import { Doctor } from '@/@types/Data/Doctor';
import { createContext, useContext, useState, ReactNode } from 'react';

interface DoctorContextType {
    doctor: Doctor | null;
    setDoctor: (doctor: Doctor) => void;
}

const DoctorContext = createContext<DoctorContextType | undefined>(undefined);

export const useDoctor = () => {
    const context = useContext(DoctorContext);
    if (!context) {
        throw new Error("useDoctor deve ser usado dentro de um DoctorProvider");
    }
    return context;
};

export const DoctorProvider = ({ children }: { children: ReactNode }) => {
    const [doctor, setDoctor] = useState<Doctor | null>(null);

    return (
        <DoctorContext.Provider value={{ doctor, setDoctor }}>
            {children}
        </DoctorContext.Provider>
    );
};
