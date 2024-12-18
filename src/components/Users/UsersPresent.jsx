import u from './Users.module.css'
import avaDefault from '../../assets/icon/avatar-default-symbolic.svg'
import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";


const UsersPresent = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize)
    const pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

        return (
            <ul className={u.usersList}>
                <div>
                    <ul className={u.pagination}>
                        {pages.map((page, index) => {
                            return (
                                <li className={props.currentPage === page ? u.pagination__item_active : ''}
                                    key={index}
                                    onClick={() => {
                                        props.onPageChanged(page)
                                    }}>
                                    {page}
                                </li>
                            )
                        })}
                    </ul>
                </div>

                {
                    props.users.map((user, index) => <li className={u.usersItem} key={index}>
                        <div className={u.leftPart}>
                            <Link to={'/profile/ ' + user.id}>
                                <img className={u.usersAvatar}
                                     src={user.photos.small != null ? user.photos.small : avaDefault}
                                     alt="avatar"/>
                            </Link>
                            <button className={u.usersBtn}
                                    disabled={props.followingProgress.some( id => id === user.id )}
                                    onClick={user.followed
                                        ? () => {
                                            props.toggleFollowingProgress(true, user.id)
                                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                                                {
                                                    withCredentials: true,
                                                    headers: {
                                                        "API-KEY": "8696c844-7167-4319-bc36-0e8015172c12"
                                                    }
                                                })
                                                .then(response => {
                                                    if(response.data.resultCode === 0) {
                                                        props.unFollow(user.id)
                                                    }
                                                    props.toggleFollowingProgress(false, user.id)
                                                })
                                        }
                                        : () => {
                                            props.toggleFollowingProgress(true, user.id)
                                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                                                {},
                                                {
                                                    withCredentials: true,
                                                    headers: {
                                                        "API-KEY": "8696c844-7167-4319-bc36-0e8015172c12"
                                                    }
                                                })
                                                .then(response => {
                                                    if(response.data.resultCode === 0) {
                                                        props.follow(user.id)
                                                    }
                                                    props.toggleFollowingProgress(false, user.id)
                                                })
                                    }}>

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
                    </li>)
                }
            </ul>
        )
}


export default UsersPresent;