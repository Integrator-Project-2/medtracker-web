"use client";

import Image from 'next/image';
import { ProfileInfoContainer, ProfileNameText, ProfileSpecializationText, TextContainer } from './profile-info';
import { UserAvatarIcon } from '../UserAvatarIcon';

export function ProfileInfo() {
    return (
        <ProfileInfoContainer>
            <TextContainer>
                <ProfileNameText>Michael Scott</ProfileNameText>
                <ProfileSpecializationText>Dermathologist</ProfileSpecializationText>
            </TextContainer>

            <UserAvatarIcon />
        </ProfileInfoContainer>
    )
}