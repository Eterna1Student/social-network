import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

const store = {
    _state:{
        textPostData: [
            { id: 1, message: "It's my first post!" },
            { id: 2, message: "Hi, how are you?"},
            { id: 3, message: "Hey, why nobody love my?" },
        ],
        newPostText: '',
        //TextMessage
        dialogsPage:{
            friends: [
                { id: 1, name: 'Andrew' },
                { id: 2, name: 'Dmitry' },
                { id: 3, name: 'Sasha' },
                { id: 4, name: 'Sveta' },
                { id: 5, name: 'Valera' },
                { id: 6, name: 'Viktor' },
            ],
            messages: [
                { id: 1, text: 'Lorem ipsum dolor sit.'},
                { id: 2, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, reiciendis?'},
                { id: 3, text: 'Lorem ipsum dolor sit amet consectetur adipisicing.'},
            ],
            newMessageBody: ''
        }
    },

    _callSubscriber() {
        console.log('StateChanged!')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {

        this._state = profileReducer(this._state, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._callSubscriber(this._state)
    }
}





export default store;