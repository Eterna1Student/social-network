import userDate from './userDate.module.css'
import Loader from "../../../common/Loader/Loader";

const UserDate = ({profile}) => {
    // console.log(props)
    if (!profile) {
        return <Loader />
    }

    return (
        <div className={userDate.wrap}>
            <div className={userDate.avatar}>
                <img src={profile.photos.large} />
            </div>
            <div className={userDate.date}>
                <span className={userDate.element}>{profile.fullName}</span>
                <span className={userDate.element}>Date of Birth: 9 january</span>
                <span className={userDate.element}>City: Volsk</span>
                <span className={userDate.element}>Education: SGTU</span>
                <span className={userDate.element}>Web Site: https://github.com/Eterna1Student</span>
            </div>
        </div>
    )
}

export default UserDate;