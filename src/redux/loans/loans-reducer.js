import { createSlice } from "@reduxjs/toolkit";

const loansSlice = createSlice({
    name: "loans",
    initialState: {
        loansList: []
    },
    reducers: {
        loadLoans: (state, action) => {
            state.loansList = action.payload
        }
    }
});

export const {loadLoans} = loansSlice.actions;

export default loansSlice.reducer;