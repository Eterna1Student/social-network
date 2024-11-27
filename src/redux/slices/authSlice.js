import { createSlice } from '@reduxjs/toolkit';


// Начальное значение
const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    // Редьюсеры в слайсах меняют состояние и ничего не возвращают
    reducers: {
        setAuthUserDataReducer: (state, action) =>
            state = {
                userId: action.payload.id,
                email: action.payload.email,
                login: action.payload.login,
                isAuth: true
            }
    }
})

// Слайс генерирует действия, которые экспортируются отдельно
// Действия генерируются автоматически из имен ключей редьюсеров
export const {
    setAuthUserDataReducer
} = authSlice.actions;

// По умолчанию экспортируется редьюсер, сгенерированный слайсом
export default authSlice.reducer;