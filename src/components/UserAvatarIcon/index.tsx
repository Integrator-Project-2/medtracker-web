import Image from 'next/image';

export function UserAvatarIcon() {
    return (
        <Image 
            src="/user-icon-avatar.svg"
            alt="Foto de perfil do usuário"
            width={48}
            height={48}
        />
    )
}