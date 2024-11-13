import { createSlice } from '@reduxjs/toolkit';
import state from "../state";

// Начальное значение
const initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1
}


const usersSlice = createSlice({
    name: 'users',
    initialState,
    // Редьюсеры в слайсах меняют состояние и ничего не возвращают
    reducers: {
        followReducer: (state, action) => {
            state.users.map((user) => {
                if (user.id === action.payload) {
                    user.followed = true
                }
            })
        },
        unfollowReducer: (state, action) => {
            state.users.map((user) => {
                if (user.id === action.payload) {
                    user.followed = false
                }
            })
        },
        setUsersReducer: (state, action) => {
            state.users = action.payload
        },
        setCurrentPageReducer: (state, action) => {
            state.currentPage = action.payload
        },
        setTotalCountReducer: (state, action) => {
            state.totalUsersCount = action.payload
        }
    },
});

// Слайс генерирует действия, которые экспортируются отдельно
// Действия генерируются автоматически из имен ключей редьюсеров
export const {
        followReducer,
        unfollowReducer,
        setUsersReducer,
        setCurrentPageReducer,
        setTotalCountReducer} = usersSlice.actions;

// По умолчанию экспортируется редьюсер, сгенерированный слайсом
export default usersSlice.reducer;