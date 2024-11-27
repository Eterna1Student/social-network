import { createSlice } from '@reduxjs/toolkit';

// Начальное значение
const initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
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
        },
        setFetchingReducer: (state, action) => {
            state.isFetching = action.payload
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
        setTotalCountReducer,
        setFetchingReducer
    } = usersSlice.actions;

// По умолчанию экспортируется редьюсер, сгенерированный слайсом
export default usersSlice.reducer;