import styled from "styled-components";
import { Table } from "@radix-ui/themes";

export const StyledTable = styled(Table.Root)`
  width: 100%;
  border: none;
  font-family: "Poppins", sans-serif;
  font-size: 12px;
`;

export const StyledHeader = styled(Table.Header)`
`;

export const StyledRow = styled(Table.Row)`
`;

export const StyledCell = styled(Table.Cell)`
  padding: 8px 16px;
  align-content: center;
`;

export const StyledColumnHeaderCell = styled(Table.ColumnHeaderCell)`
    color: var(--light-purple-with-opacity);
    font-family: "Poppins", sans-serif;
    font-weight: 600;
`;
