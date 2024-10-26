const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE'

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
                { id: 1, text: 'Lorem ipsum dolor sit.' },
                { id: 2, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, reiciendis?'},
                { id: 3, text: 'Lorem ipsum dolor sit amet consectetur adipisicing.' },
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
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.newPostText
            }
            this._state.textPostData.push(newPost)
            this._state.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body
            this._callSubscriber(this._state)
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.newMessageBody = ''
            this._state.dialogsPage.messages.push({id: 4, text: body})
            this._callSubscriber(this._state)
        }
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default store;