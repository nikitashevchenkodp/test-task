import { createSlice } from "@reduxjs/toolkit";

const loansSlice = createSlice({
    name: "loans",
    initialState: {
        loansList: []
    },
    reducers: {
        loadLoans: (state, action) => {
            state.loansList = action.payload
        },
        addInvest: (state, action) => {
            const idx = state.loansList.findIndex((item) => item.id === action.payload.id);
            const newState = [
                ...state.loansList.slice(0, idx),
                 action.payload,
                  ...state.loansList.slice(idx+1)
            ];
            state.loansList = newState
        }
    }
});

export const {loadLoans, addInvest} = loansSlice.actions;

export default loansSlice.reducer;