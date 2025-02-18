"use client";

import { LayoutContainerProps } from '@/@types/components/LayoutContainerProps';
import { LayoutContainer as StyledLayoutContainer } from './layout-container'

interface StyledLayoutContainerProps extends LayoutContainerProps {
    children: React.ReactNode;
}

export function LayoutContainer({ 
    children, 
    flexDirection, 
    flex, 
    alignItems, 
    justifyContent, 
    maxWidth, 
    margin, 
    backgroundColor
}: StyledLayoutContainerProps) {
    return (
        <StyledLayoutContainer 
            flexDirection={flexDirection}
            flex={flex}
            alignItems={alignItems}
            maxWidth={maxWidth}
            justifyContent={justifyContent}
            margin={margin}
            backgroundColor={backgroundColor}
        >
            {children}
        </StyledLayoutContainer>
    )
}