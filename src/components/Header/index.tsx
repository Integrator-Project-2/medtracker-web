"use client";

import Image from 'next/image';
import { Header as StyledHeader } from './header'
import { ProfileInfo } from '../ProfileInfo';
import Link from 'next/link';

export function Header() {
    return( 
        <StyledHeader>
            <Link href="/">
                <Image 
                    src="logo.svg"
                    alt="Logo Medtracker"
                    width={211}
                    height={30}
                />
            </Link>

            <ProfileInfo name='Michael Scott' specialization='Dermatologist' />
        </StyledHeader>
    )
}