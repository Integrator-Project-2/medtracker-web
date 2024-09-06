"use client";

import { ProfileInfoContainer, ProfileNameText, ProfileSpecializationText, TextContainer } from './profile-info';
import { AvatarCircle } from '../AvatarCircle';

interface ProfileInfoProps {
    name: string;
    specialization: string;
}

export function ProfileInfo({ name, specialization }: ProfileInfoProps) {
    return (
        <ProfileInfoContainer>
            <TextContainer>
                <ProfileNameText>{name}</ProfileNameText>
                <ProfileSpecializationText>{specialization}</ProfileSpecializationText>
            </TextContainer>

            <AvatarCircle 
                name={name}
                size={48}
                bgColor='var(--navy)'
                color='var(--white)'
            />
        </ProfileInfoContainer>
    )
}