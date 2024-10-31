import { createSlice } from '@reduxjs/toolkit';

// Начальное значение
const initialState = {
    /*Dialogs page*/
    friends: [
        { id: 1, name: 'Andrew' },
        { id: 2, name: 'Dmitry' },
        { id: 3, name: 'Sasha' },
        { id: 4, name: 'Sveta' },
        { id: 5, name: 'Valera' },
        { id: 6, name: 'Viktor' },
    ],
    messages: [
        { id: 1, message: 'Lorem ipsum dolor sit.'},
        { id: 2, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, reiciendis?'},
        { id: 3, message: 'Lorem ipsum dolor sit amet consectetur adipisicing.'},
],
    newMessageBody: ''
}

const dialogsSlice = createSlice({
    name: 'dialogs',
    initialState,
    // Редьюсеры в слайсах меняют состояние и ничего не возвращают
    reducers: {
        updateNewMessageBodyReducer: (state, action) => {
            state.newMessageBody = action.payload
        },
        sendMessageReducer: (state, action) => {
            state.messages.push({
                id: 5,
                message: state.newMessageBody
            })
            state.newMessageBody = ''
        }
    },
});

// Слайс генерирует действия, которые экспортируются отдельно
// Действия генерируются автоматически из имен ключей редьюсеров
export const { updateNewMessageBodyReducer, sendMessageReducer} = dialogsSlice.actions;

// По умолчанию экспортируется редьюсер, сгенерированный слайсом
export default dialogsSlice.reducer;