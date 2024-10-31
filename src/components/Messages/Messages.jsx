import style from './Messages.module.css';
import {useDispatch, useSelector} from "react-redux";
import Friend from "./Friend/Friend";
import TextMessage from "./TextMessage/TextMessage";
import {sendMessageReducer, updateNewMessageBodyReducer} from "../../redux/slices/dialogsSlice";



const Messages = (props) => {

    let dialogsElement = props.friends.map((d, index) => <Friend name={d.name} id={d.id} key={index}/>)
    let messagesElement = props.messages.map((message, index) => <TextMessage text={message.message} id={message.id} key={index}/>)

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
                    <textarea value={props.newMessageBody}
                              onChange={props.updateNewMessage}
                              placeholder='Введите сообщение'>
                    </textarea>
                    <button onClick={props.sendMessage}>отправить</button>
                </div>
            </div>
        </div>

    </div>
}

export default Messages;