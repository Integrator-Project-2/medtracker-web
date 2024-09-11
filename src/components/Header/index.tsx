"use client";

import Image from 'next/image';
import { Header as StyledHeader } from './header'
import { ProfileInfo } from '../ProfileInfo';
import Link from 'next/link';
import { useDoctor } from '@/context/DoctorContext';

export function Header() {
    const { doctor } = useDoctor();

    return( 
        <StyledHeader>
            <Link href="/">
                <Image 
                    src="/logo.svg"
                    alt="Logo Medtracker"
                    width={211}
                    height={30}
                />
            </Link>

            <ProfileInfo name={doctor?.user.name || "Doctor"} specialization={doctor?.specialty || 'Especialista'} />
        </StyledHeader>
    )
}