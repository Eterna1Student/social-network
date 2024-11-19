import { createSlice } from '@reduxjs/toolkit';

// Начальное значение
const initialState = {

    /*Profile page*/
    textPostData: [
        { id: 1, message: "It's my first post!" },
        { id: 2, message: "Hi, how are you?"},
        { id: 3, message: "Hey, why nobody love my?" },
    ],
    newPostText: '',
    profile: null
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    // Редьюсеры в слайсах меняют состояние и ничего не возвращают
    reducers: {
        updateTextPostReducer: (state, action) => {
            state.newPostText = action.payload
        },
        addPostReducer: (state, action) => {
            state.textPostData.push({
                id: 5,
                message: state.newPostText
            })
            state.newPostText = ''
        },
        setUserProfileReducer: (state, action) => {
            state.profile = action.payload
        }
    },
});

// Слайс генерирует действия, которые экспортируются отдельно
// Действия генерируются автоматически из имен ключей редьюсеров
export const {
    updateTextPostReducer,
    addPostReducer,
    setUserProfileReducer
} = profileSlice.actions;

// По умолчанию экспортируется редьюсер, сгенерированный слайсом
export default profileSlice.reducer;