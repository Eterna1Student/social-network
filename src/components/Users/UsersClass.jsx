import u from './Users.module.css'
import axios from "axios";
import avaDefault from '../../assets/icon/avatar-default-symbolic.svg'
import React, {Component} from "react";

class UsersClass extends Component {
    componentDidMount = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }
    onPageChanged = (page) => {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize)
        const pages = []

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        // console.log(this.props.currentPage)
        return <ul className={u.usersList}>
            <div>
                <ul className={u.pagination}>
                    {pages.map((page, index) => {
                        return (
                            <li className={this.props.currentPage === page ? u.pagination__item_active : ''}
                                key={index}
                                onClick={() => {this.onPageChanged(page)}}>
                                {page}
                            </li>
                        )

                    })}
                </ul>
            </div>

            {
                this.props.users.map((user, index) => <li className={u.usersItem} key={index}>
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
}

export default UsersClass;