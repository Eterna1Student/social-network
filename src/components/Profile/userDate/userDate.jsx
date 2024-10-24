import userDate from './userDate.module.css'

const UserDate = () => {
    return (
        <div className={userDate.wrap}>
            <div className={userDate.avatar}>
                <img src="../../avatar.jpg" alt="photo" />
            </div>
            <div className={userDate.date}>
                <span className={userDate.element}>Oleg K.</span>
                <span className={userDate.element}>Date of Birth: 9 january</span>
                <span className={userDate.element}>City: Volsk</span>
                <span className={userDate.element}>Education: SGTU</span>
                <span className={userDate.element}>Web Site: https://github.com/Eterna1Student</span>
            </div>
        </div>
    )
}

export default UserDate;