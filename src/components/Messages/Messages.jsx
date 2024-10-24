import { NavLink } from 'react-router-dom';
import style from './Messages.module.css';


const Friend = (props) => {
    let path = '/dialogs/' + props.id;
    return (

        <div className={style.item + '' + style.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const TextMessage = ({text}) => {
    return (
        <div className={style.message}>{text}</div>
    )
}


const Messages = (props) => {
//Массивы с данными
    // let friends = [
    //     { id: 1, name: 'Andrew' },
    //     { id: 2, name: 'Dmitry' },
    //     { id: 3, name: 'Sasha' },
    //     { id: 4, name: 'Sveta' },
    //     { id: 5, name: 'Valera' },
    //     { id: 6, name: 'Viktor' }, 
    // ]    
    // let messages = [
    //     { id: 1, text: 'Lorem ipsum dolor sit.' },
    //     { id: 2, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, reiciendis?'},
    //     { id: 3, text: 'Lorem ipsum dolor sit amet consectetur adipisicing.' },
    // ]
    //Компоненты друзей и сообщений 
    // let dialogsElements = friends.map(d => <Friend name={d.name} id={d.id} />);
    // let messagesElements = textMessages.map(text => <TextMessage message={text.message} id={text.id}/>);
    return <div>
        <h2 className='title'>
            DIALOGS
        </h2>
        <div className={style.content}>
            <div className={style.friendsList}>
                {props.messagesData.friends.map((d, index) => <Friend name={d.name} id={d.id} key={index} />) }
            </div>

            <div className={style.dialogs}>
                {props.messagesData.messages.map((message, index) => <TextMessage text={message.text} id={message.id} key={index}/>) }
                <textarea name=""></textarea>
                <button>отправить</button>
            </div>
        </div>

    </div>
}

export default Messages;