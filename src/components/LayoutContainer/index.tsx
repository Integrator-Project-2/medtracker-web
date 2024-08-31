"use client";

import { LayoutContainer as StyledLayoutContainer } from './layout-container'

interface LayoutContainerProps {
    children: React.ReactNode
}

export function LayoutContainer({ children }: LayoutContainerProps) {
    return (
        <StyledLayoutContainer>
            {children}
        </StyledLayoutContainer>
    )
}