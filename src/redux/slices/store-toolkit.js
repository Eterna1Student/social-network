import { configureStore } from '@reduxjs/toolkit';
import profileSlice from "./profileSlice";
import dialogsSlice from "./dialogsSlice";
import usersSlice from "./usersSlice";
import authSlice from "./authSlice";


export default configureStore({
    reducer: {
        profileSlice,
        dialogsSlice,
        usersSlice,
        authSlice
    },
});


