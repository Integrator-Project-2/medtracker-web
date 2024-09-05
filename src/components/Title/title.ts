import { StyledTitleProps } from "@/@types/components/StyledTitleProps";
import styled from "styled-components";

export const TitleContainer = styled.div<StyledTitleProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: ${({ margin }) => margin || '78px 0 56px'};
`;

export const Title = styled.h1`
    color: ${({ color }) => color || 'var(--dark-blue)'};
    font-size: 20px;
`;