"use client";

import { StyledTitleProps } from "@/@types/components/StyledTitleProps";
import { TitleContainer } from "./title";
import { Title as StyledTitle } from "./title";

interface TitleProps extends StyledTitleProps {
    title: string;
    children?: React.ReactNode
}

export function Title({ children, title, color, margin }: TitleProps) {
    return (
        <TitleContainer
            margin={margin}
        >
            <StyledTitle 
                color={color}
            >
                {title}
            </StyledTitle>

            {children}
        </TitleContainer>
    )
}