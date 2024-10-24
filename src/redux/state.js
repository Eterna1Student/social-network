const store = {
    _state:{
        textPostData: [
            { id: 1, message: "It's my first post!" },
            { id: 2, message: "Hi, how are you?"},
            { id: 3, message: "Hey, why nobody love my?" },
        ],
        newPostText: '',
        //Messages
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
        ]
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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.newPostText
            }
            this._state.textPostData.push(newPost)
            this._state.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.newPostText = action.newText
            this._callSubscriber(this._state)
        }
    }
}



export default store;