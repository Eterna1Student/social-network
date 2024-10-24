import prof from'./Profile.module.css'
import Banner from './Banner/Banner'
import MyPost from './Posts/myPost'
import UserDate from './userDate/userDate'

const Profile = (props) => {

    return <div className={prof.content}>
        <Banner />
        <UserDate />
        <MyPost textsPots={props.profilePage.textPostData}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}/>
    </div>
}

export default Profile;