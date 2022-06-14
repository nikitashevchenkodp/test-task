import { configureStore } from "@reduxjs/toolkit";
import loansReducer from "./loans/loans-reducer";
import modalSlice from './modal/modal-reducer';

export const store = configureStore({
    reducer: {
        loans: loansReducer,
        modal: modalSlice
    }
});