import { NavLink } from 'react-router-dom';
import style from './Friend.module.css';


const Friend = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={style.item + '' + style.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default Friend;