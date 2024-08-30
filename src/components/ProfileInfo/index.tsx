"use client";

import Image from 'next/image';
import { ProfileInfoContainer, ProfileNameText, ProfileSpecializationText, TextContainer } from './profile-info';

export function ProfileInfo() {
    return (
        <ProfileInfoContainer>
            <TextContainer>
                <ProfileNameText>Michael Scott</ProfileNameText>
                <ProfileSpecializationText>Dermathologist</ProfileSpecializationText>
            </TextContainer>

            <Image 
                src="user-avatar.svg"
                alt="Foto de perfil do usuário"
                width={48}
                height={48}
            />
        </ProfileInfoContainer>
    )
}