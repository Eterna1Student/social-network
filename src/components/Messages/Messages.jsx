import Friend from "./Friend/Friend";
import TextMessage from "./TextMessage/TextMessage";
import style from './Messages.module.css';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";


const Messages = (props) => {

    let state = props.store.getState().dialogsPage

    let dialogsElement = state.friends.map((d, index) => <Friend name={d.name} id={d.id} key={index}/>)
    let messagesElement = state.messages.map((message, index) => <TextMessage text={message.text} id={message.id} key={index}/>)
    let newMessageBody = state.newMessageBody
    // console.log(newMessageBody)
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return <div>
        <h2 className='title'>
            DIALOGS
        </h2>
        <div className={style.content}>
            <div className={style.friendsList}>
                { dialogsElement }
            </div>

            <div className={style.dialogs}>
                { messagesElement }
                <div>
                    <textarea value={newMessageBody} onChange={onNewMessageChange} placeholder='Введите сообщение'></textarea>
                    <button onClick={onSendMessageClick}>отправить</button>
                </div>
            </div>
        </div>

    </div>
}

export default Messages;