import { StyledTextInputProps } from '@/@types/components/StyledTextInputProps';
import styled from 'styled-components';

export const SelectContainer = styled.div<{ margin?: string, padding?: string }>`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 5px;
    margin: ${({ margin }) => margin || '37px'};
    justify-content: center;
    width: 100%;
    font-family: 'Poppins', sans-serif;
    padding: ${({ padding }) => padding || '0px'};
`;

export const StyledSelect = styled.select<StyledTextInputProps>`
    width: ${({ width }) => width || '100%'};
    height: ${({ height }) => height || 'auto'};
    padding: ${({ padding }) => padding || '8px'};
    border-radius: ${({ borderRadius }) => borderRadius || '8px'};
    border: 1px solid var(--light-purple);
    color: ${({ color }) => color || 'var(--dark-blue)'};
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    appearance: none;

    &:focus {
        border: 2px solid var(--light-blue);
        outline: none;
    }

    &::after {
        content: '';
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        border: solid var(--dark-blue);
        border-width: 0 2px 2px 0;
        padding: 3px;
        pointer-events: none; 
    }
`;

