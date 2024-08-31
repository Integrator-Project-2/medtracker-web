"use client";

import { StyledButtonProps } from '@/@types/components/StyledButtonProps';
import { Button as StyledButton } from './button';
import Image from 'next/image';

interface ButtonProps extends StyledButtonProps {
    icon?: string;
    children?: React.ReactNode;
}

export function Button({ 
    backgroundColor,
    color,
    width,
    height,
    fontSize,
    icon,
    padding,
    borderRadius,
    children,
}: ButtonProps){
    return (
        <StyledButton
            backgroundColor={backgroundColor}
            color={color}
            width={width}
            height={height}
            fontSize={fontSize}
            padding={padding}
            borderRadius={borderRadius}
        >
            {icon && <Image src={icon} alt='Ícone' width={14} height={14} />}

            {children}
        </StyledButton>       
    )
}