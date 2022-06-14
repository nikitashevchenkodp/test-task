import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: "modal",
    initialState: {
        active: false,
        currentLoan: null
    },
    reducers: {
        showModal: (state, action) => {
            state.active = action.payload
        },
        setCurrentLoan: (state, action) => {
            state.currentLoan = action.payload
        }
    }
});

export const {showModal, setCurrentLoan} = modalSlice.actions;
export default modalSlice.reducer;