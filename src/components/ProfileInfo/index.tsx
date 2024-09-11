"use client";

import { ProfileInfoContainer, ProfileNameText, ProfileSpecializationText, TextContainer } from './profile-info';
import { AvatarCircle } from '../AvatarCircle';
import { useState } from 'react';
import { LogoutMenu } from '../LogoutMenu';

interface ProfileInfoProps {
    name: string;
    specialization: string;
}

export function ProfileInfo({ name, specialization }: ProfileInfoProps) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        // Remove token from localStorage or perform any other logout logic
        localStorage.removeItem('token');
        setAnchorEl(null);
        // Redirect user to the login page or refresh the page
    };

    return (
        <ProfileInfoContainer onClick={handleClick}>
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

            <LogoutMenu anchorEl={anchorEl} open={open} onClose={handleClose} />
        </ProfileInfoContainer>
    )
}