// A RowID is just a number
export type RowID = number;

// An interface describing our row structure
export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number; // optional
}