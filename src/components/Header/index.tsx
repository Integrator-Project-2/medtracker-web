import Image from 'next/image';
import { ProfileInfo } from './ProfileInfo';

export function Header() {
    return( 
        <header>
            <Image 
                src="logo.svg"
                alt="Logo Medtracker"
                width={211}
                height={30}
            />

            <ProfileInfo />
        </header>
    )
}