import { AvatarCircleProps } from "@/@types/components/AvatarCircleProps";
import { styled } from "styled-components";

export const AvatarCircleContainer = styled.div<AvatarCircleProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    background-color: ${({ bgColor }) => bgColor};
    color: ${({ color }) => color};
    border-radius: 50%;
    font-size: ${({ size }) => size / 2}px;
    font-weight: 500;
    text-transform: uppercase;
`;