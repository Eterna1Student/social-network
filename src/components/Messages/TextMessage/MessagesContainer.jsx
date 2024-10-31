import {useDispatch, useSelector} from "react-redux";
import Messages from "../Messages";
import {sendMessageReducer, updateNewMessageBodyReducer} from "../../../redux/slices/dialogsSlice";

const MessagesContainer = (props) => {

    const {friends, messages, newMessageBody} = useSelector((state) => state.dialogsSlice)
    const dispatch = useDispatch();
    let updateNewMessage = (e) => dispatch(updateNewMessageBodyReducer(e.target.value))
    let sendMessage = () => dispatch(sendMessageReducer())

    return (
        <Messages friends={friends}
                  messages={messages}
                  newMessageBody={newMessageBody}
                  updateNewMessage={updateNewMessage}
                  sendMessage={sendMessage}
        />
    )
}

export default MessagesContainer;