"use client";

import Image from 'next/image'
import { UserAvatarIcon } from '../UserAvatarIcon'
import { PatientDetailSectionContainer, PatientDetailSectionTitle, SideBarContainer, TextPatientCPF, TextPatientName, UserProfileContainer } from './side-bar'
import { TextInfo } from '../TextInfo';
import { TextInfoContainer } from '../TextInfo/text-info';

export function SideBar() {
    return (
        <SideBarContainer>
            <UserProfileContainer>
                <UserAvatarIcon />

                <Image 
                    src='/edit-icon.svg'
                    alt='Ícone de editar informações do usuário'
                    width={24}
                    height={24}
                />
            </UserProfileContainer>

            <TextPatientName>Pamela Halpert</TextPatientName>
            <TextPatientCPF>124.005.001-01</TextPatientCPF>

            <PatientDetailSectionContainer>
                <PatientDetailSectionTitle>Contact</PatientDetailSectionTitle>

                <TextInfo 
                    label='Email'
                    description='pamelahalpert@email.com'
                />

                <TextInfo 
                    label='Phone number'
                    description='(00) 0000-0000'
                />

                <TextInfo 
                    label='Address'
                    description='Street 1, New avenue, City'
                />
            </PatientDetailSectionContainer>

            <PatientDetailSectionContainer>
                <PatientDetailSectionTitle>Personal</PatientDetailSectionTitle>

                <TextInfoContainer
                    flexDirection='row'
                    gap='31px'
                >
                    <TextInfo 
                        label='Date of birth'
                        description='09-20-2003'
                    />

                    <TextInfo 
                        label='Gender'
                        description='Female'
                    />
                </TextInfoContainer>


                <TextInfoContainer
                    flexDirection='row'
                    gap='31px'
                >
                    <TextInfo 
                        label='Height'
                        description='165cm'
                    />

                    <TextInfo 
                        label='Weight'
                        description='60kg'
                    />
                </TextInfoContainer>

                <TextInfo 
                    label='Allergies and observations'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit....'
                />
            </PatientDetailSectionContainer>

        </SideBarContainer>
    )
}