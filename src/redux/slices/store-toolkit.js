import { configureStore } from '@reduxjs/toolkit';
import profileSlice from "./profileSlice";
import dialogsSlice from "./dialogsSlice";


export default configureStore({
    reducer: {
        profileSlice,
        dialogsSlice
    },
});

