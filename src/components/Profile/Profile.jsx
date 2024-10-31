import prof from'./Profile.module.css'
import Banner from './Banner/Banner'
import MyPost from './Posts/myPost'
import UserDate from './userDate/userDate'

const Profile = (props) => {

    return <div className={prof.content}>
        <Banner />
        <UserDate />
        <MyPost />
    </div>
}

export default Profile;