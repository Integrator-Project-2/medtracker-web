"use client";

import { TitleContainer } from "./title";
import { Title as StyledTitle } from "./title";

interface TitleProps {
    title: string;
    children: React.ReactNode
}

export function Title({ children, title }: TitleProps) {
    return (
        <TitleContainer>
            <StyledTitle>{title}</StyledTitle>

            {children}
        </TitleContainer>
    )
}