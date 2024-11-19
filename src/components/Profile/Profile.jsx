import prof from'./Profile.module.css'
import Banner from './Banner/Banner'
import UserDate from './userDate/userDate'
import MyPostContainer from "./Posts/MyPostContainer";


const Profile = (props) => {
    return <div className={prof.content}>
        <Banner />
        <UserDate profile={props.profileData}/>
        <MyPostContainer />
    </div>
}

export default Profile;