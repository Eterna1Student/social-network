import userDate from './userDate.module.css'
import Loader from "../../../common/Loader/Loader";

const UserDate = (props) => {
    if (!props.profile) {
        return <Loader />
    }
    return (
        <div className={userDate.wrap}>
            <div className={userDate.avatar}>
                <img src={props.profile.photos.large} />
            </div>
            <div className={userDate.date}>
                <span className={userDate.element}>{props.profile.fullName}</span>
                <span className={userDate.element}>Date of Birth: 9 january</span>
                <span className={userDate.element}>City: Volsk</span>
                <span className={userDate.element}>Education: SGTU</span>
                <span className={userDate.element}>Web Site: https://github.com/Eterna1Student</span>
            </div>
        </div>
    )
}

export default UserDate;