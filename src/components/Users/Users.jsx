import u from './Users.module.css'

const Users = (props) => {

    if (props.users.length === 0){
        props.setUsers([
            {
                id: 1,
                fullName: 'Andrew',
                status: 'Именно ошибки делают нас интересными.',
                location: {city: 'Saratov', country: 'Russia'},
                followed: true,
                avatar: 'https://i.pinimg.com/736x/9d/cc/2d/9dcc2da998716f7b78bb21522973bf18.jpg'
            },
            {
                id: 2,
                fullName: 'Dmitry',
                status: 'Завтра — уже слишком поздно.',
                location: {city: 'Samara', country: 'Russia'},
                followed: false,
                avatar: 'https://avatars.mds.yandex.net/i?id=8d7af49ffa5b14e2458516228c14f545-3727509-images-thumbs&n=13'
            },
            {
                id: 3,
                fullName: 'Sasha',
                status: 'Все проходит — это самая верная истина на свете.',
                location: {city: 'Moskow', country: 'Russia'},
                followed: true,
                avatar: 'https://avatars.mds.yandex.net/i?id=44a32c2978508372be74567e58de2584fde94a82-12522553-images-thumbs&n=13'
            },
            {
                id: 4,
                fullName: 'Sveta',
                status: 'Счастье в мелочах, которые нельзя пропускать.',
                location: {city: 'Vologda', country: 'Russia'},
                followed: true,
                avatar: 'https://avatars.mds.yandex.net/i?id=8aa66efe20385a4fa438c4d385a5a597360a795c-10878933-images-thumbs&n=13'
            },
            {
                id: 5,
                fullName: 'Valera',
                status: 'Он не понимал её, а только любил.',
                location: {city: 'SPB', country: 'Russia'},
                followed: true,
                avatar: 'https://avatars.mds.yandex.net/i?id=4b96023bb321d5ad73962b2fa974a15e9283f2fa-4012844-images-thumbs&n=13'
            },
            {
                id: 6,
                fullName: 'Viktor',
                status: 'Закат красив, когда веришь в рассвет…',
                location: {city: 'Volsk', country: 'Russia'},
                followed: true,
                avatar: 'https://i.pinimg.com/736x/04/32/21/0432216ae19a4df9849cb830d870f515.jpg'
            },
        ])
    }

    return <ul className={u.usersList}>
        {
            props.users.map(user => <li className={u.usersItem} key={user.id}>
                <div className={u.leftPart}>
                    <img className={u.usersAvatar} src={user.avatar} alt="avatar"/>
                    <button className={u.usersBtn} onClick={user.followed ? () => props.unFollow(user.id) : () => props.follow(user.id)}>
                        {user.followed === true ? 'Удалить' : 'Добавить'}
                    </button>
                </div>
                <div className={u.rightPart}>
                    <div className={u.nameAndStatus}>
                        <div className={u.name}>{user.fullName}</div>
                        <div>{user.status}</div>
                    </div>
                    <div className={u.location}>
                        <div className={u.country}>{user.location.country},</div>
                        <div className={u.city}>{user.location.city}</div>
                    </div>
                </div>
            </li> )
        }
    </ul>
}

export default Users;