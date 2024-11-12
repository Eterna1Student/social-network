import u from './Users.module.css'
import axios from "axios";
import avaDefault from '../../assets/icon/avatar-default-symbolic.svg'
import {Component} from "react";

class Users extends Component {

    constructor(props) {
        super(props)

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <ul className={u.usersList}>
                 <button onClick={this.getUsers}>Добавить пользователей</button>
                 {
                    this.props.users.map(user => <li className={u.usersItem} key={user.id}>
                        <div className={u.leftPart}>
                            <img className={u.usersAvatar}
                                 src={user.photos.small != null ? user.photos.small : avaDefault}
                                 alt="avatar"/>
                            <button className={u.usersBtn}
                                    onClick={user.followed ? () => this.props.unFollow(user.id) : () => this.props.follow(user.id)}>
                                {user.followed === true ? 'Удалить' : 'Добавить'}
                            </button>
                        </div>
                        <div className={u.rightPart}>
                            <div className={u.nameAndStatus}>
                                <div className={u.name}>{user.name}</div>
                                <div>{user.status}</div>
                            </div>
                            <div className={u.location}>
                                <div className={u.country}>{'user.location.country'},</div>
                                <div className={u.city}>{'user.location.city'}</div>
                            </div>
                        </div>
                    </li> )
                }
            </ul>
    }


    // let getUsers = () => {
    //     if (props.users.length === 0){
    //         axios.get('https://social-network.samuraijs.com/api/1.0/users')
    //             .then(response => {
    //                 props.setUsers(response.data.items)
    //             })
    //     }
    // }
    //
    // return <ul className={u.usersList}>
    //     <button onClick={getUsers}>Добавить пользователей</button>
    //     {
    //         props.users.map(user => <li className={u.usersItem} key={user.id}>
    //             <div className={u.leftPart}>
    //                 <img className={u.usersAvatar}
    //                      src={user.photos.small != null ? user.photos.small : avaDefault}
    //                      alt="avatar"/>
    //                 <button className={u.usersBtn}
    //                         onClick={user.followed ? () => props.unFollow(user.id) : () => props.follow(user.id)}>
    //                     {user.followed === true ? 'Удалить' : 'Добавить'}
    //                 </button>
    //             </div>
    //             <div className={u.rightPart}>
    //                 <div className={u.nameAndStatus}>
    //                     <div className={u.name}>{user.name}</div>
    //                     <div>{user.status}</div>
    //                 </div>
    //                 <div className={u.location}>
    //                     <div className={u.country}>{'user.location.country'},</div>
    //                     <div className={u.city}>{'user.location.city'}</div>
    //                 </div>
    //             </div>
    //         </li> )
    //     }
    // </ul>
}

export default Users;