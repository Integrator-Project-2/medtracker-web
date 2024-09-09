"use client";

import Image from 'next/image'
import { UserAvatarIcon } from '../UserAvatarIcon'
import { EditButton, PatientDetailSectionContainer, PatientDetailSectionTitle, SideBarContainer, TextPatientCPF, TextPatientName, UserProfileContainer } from './side-bar'
import { TextInfo } from '../TextInfo';
import { TextInfoContainer } from '../TextInfo/text-info';
import { Patient } from '@/@types/Data/Patient';
import { getGenderDescription } from '../../../utils/getGenderDescription';
import { use, useEffect, useState } from 'react';
import { UserInfo } from '../UserInfo';
import { UserInfoForm } from '../UserInfoForm';
import { SideBarSkeleton } from '../SideBarSkeleton';


interface SideBarProps {
    patient: Patient
    loading?: boolean
}

export function SideBar({ patient, loading = false }: SideBarProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [currentPatient, setCurrentPatient] = useState(patient);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCancel = () => {
        setIsEditing(false);
    };

    const handleFormSubmit = (updatedPatient: Patient) => {
        setCurrentPatient(updatedPatient);
        setIsEditing(false);
    };

    useEffect(() => {
        setCurrentPatient(patient);
    }, [patient])
    
    return (
        <SideBarContainer>
            <UserProfileContainer>
                <UserAvatarIcon />

                <EditButton onClick={handleEditClick}>
                    <Image 
                        src='/edit-icon.svg'
                        alt='Ícone de editar informações do usuário'
                        width={24}
                        height={24}
                    />
                </EditButton>
            </UserProfileContainer>

            {loading ? (
                <SideBarSkeleton />
            ) : isEditing && currentPatient ? (
                <UserInfoForm 
                    patient={currentPatient} 
                    onSubmit={handleFormSubmit} 
                    onCancel={handleCancel} 
                />
            ) : (
                <UserInfo patient={currentPatient} loading={loading} />
            )}

        </SideBarContainer>
    )
}