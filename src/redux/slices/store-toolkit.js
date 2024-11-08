import { configureStore } from '@reduxjs/toolkit';
import profileSlice from "./profileSlice";
import dialogsSlice from "./dialogsSlice";
import usersSlice from "./usersSlice";


export default configureStore({
    reducer: {
        profileSlice,
        dialogsSlice,
        usersSlice,
    },
});

