import { RowID, RowElement } from './interface';

export function insertRow(row: RowElement): RowID;
export function deleteRow(rowId: RowID): undefined;
export function updateRow(rowId: RowID, row: RowElement): RowID;
