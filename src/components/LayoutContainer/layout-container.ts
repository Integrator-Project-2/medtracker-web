import { LayoutContainerProps } from "@/@types/components/LayoutContainerProps";
import { styled } from "styled-components";

export const LayoutContainer = styled.div<LayoutContainerProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'column'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  justify-content: ${({ justifyContent }) => justifyContent};
  height: 100vh;
  max-width: ${({ maxWidth }) => maxWidth ||( 1218 + 'px')} ;
  width: 100%;
  flex: ${({ flex }) => flex || 'None'};
  margin: ${({ margin }) => margin} ;
  background-color: ${({ backgroundColor }) => backgroundColor} ;
`;