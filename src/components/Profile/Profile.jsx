import prof from'./Profile.module.css'
import Banner from './Banner/Banner'
import UserDate from './userDate/userDate'
import MyPostContainer from "./Posts/MyPostContainer";
import {useSelector} from "react-redux";


const Profile = (props) => {
    const profileData = useSelector((state) => state.profileSlice.profile)

    return <div className={prof.content}>
        <Banner />
        <UserDate profile={profileData}/>
        <MyPostContainer />
    </div>
}

export default Profile;