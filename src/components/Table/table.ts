import styled from "styled-components";
import { Table } from "@radix-ui/themes";

export const StyledTable = styled(Table.Root)`
  width: 100%;
  border: none;
`;

export const StyledHeader = styled(Table.Header)`
`;

export const StyledRow = styled(Table.Row)`
`;

export const StyledCell = styled(Table.Cell)`
  padding: 8px 16px;
`;

export const StyledColumnHeaderCell = styled(Table.ColumnHeaderCell)`
    color: var(--light-purple-with-opacity);
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    /* border-bottom: 2px solid var(--light-purple-with-opacity); */
`;
