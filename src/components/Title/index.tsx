"use client";

import { TitleContainer } from "./title";
import { Title as StyledTitle } from "./title";

interface TitleProps {
    children: React.ReactNode
}

export function Title({ children }: TitleProps) {
    return (
        <TitleContainer>
            <StyledTitle>Pacients</StyledTitle>

            {children}
        </TitleContainer>
    )
}