import style from './TextMessage.module.css';

const TextMessage = ({text}) => {
    return (
        <div className={style.message}>{text}</div>
    )
}

export default TextMessage;