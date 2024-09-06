"use client";

import { StyledButtonProps } from '@/@types/components/StyledButtonProps';
import { Button as StyledButton } from './button';
import Image from 'next/image';

interface ButtonProps extends StyledButtonProps {
    icon?: string;
    text?: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
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
    text,
    type = 'button',
    disabled = false, 
    onClick
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
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {icon && <Image src={icon} alt='Ícone' width={14} height={14} />}

            {text}
        </StyledButton>       
    )
}