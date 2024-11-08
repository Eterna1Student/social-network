import { createSlice } from '@reduxjs/toolkit';

// Начальное значение
const initialState = {
    users: []
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
            state.users = [...state.users, ...action.payload]
        }
    },
});

// Слайс генерирует действия, которые экспортируются отдельно
// Действия генерируются автоматически из имен ключей редьюсеров
export const { followReducer, unfollowReducer, setUsersReducer} = usersSlice.actions;

// По умолчанию экспортируется редьюсер, сгенерированный слайсом
export default usersSlice.reducer;