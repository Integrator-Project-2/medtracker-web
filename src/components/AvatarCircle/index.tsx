import { AvatarCircleProps } from "@/@types/components/AvatarCircleProps";
import { AvatarCircleContainer } from "./avatar-circle";

export function AvatarCircle({ name, size, bgColor, color }: AvatarCircleProps) {
    const initial = name.charAt(0);

    return ( 
        <AvatarCircleContainer name={name} size={size} bgColor={bgColor} color={color}>
            {initial}
        </AvatarCircleContainer>
    );
}

