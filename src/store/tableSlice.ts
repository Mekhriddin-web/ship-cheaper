import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TableRow {
  id: string;
  company: string;
  name: string;
  iban: string;
  bic: string;
  bankName: string;
  additional?: string;
  street?: string;
  country?: string;
  email?: string;
  birthday?: string;
  homepage?: string;
  postalCode?: string;
  fax?: string;
}

interface TableState {
  tableRows: TableRow[];
  formState: TableRow;
}

const initialState: TableState = {
  tableRows: [],
  formState: {
    id: '',
    company: '',
    name: '',
    iban: '',
    bic: '',
    bankName: '',
    additional: '',
    street: '',
    postalCode: '',
    country: '',
    fax: '',
    email: '',
    birthday: '',
    homepage: '',
  },
};

export const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    updateFormState: (state, action: PayloadAction<TableRow>) => {
      state.formState = { ...state.formState, ...action.payload };
    },
    addTableRow: (state, action: PayloadAction<TableRow>) => {
      state.tableRows.push(action.payload);
    },
    removeTableRow: (state, action: PayloadAction<string>) => {
      state.tableRows = state.tableRows.filter(
        row => row.id !== action.payload
      );
    },
  },
});

export const { updateFormState, addTableRow, removeTableRow } =
  tableSlice.actions;

export default tableSlice.reducer;
