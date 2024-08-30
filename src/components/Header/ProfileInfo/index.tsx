import Image from 'next/image';
import styles from "./profile-info.module.css";

export function ProfileInfo() {
    return (
        <div>
            <p>Michael Scott</p>
            <p>Dermathologist</p>

            <Image 
                src="user-avatar.svg"
                alt="Foto de perfil do usuário"
                width={48}
                height={48}
            />
        </div>
    )
}