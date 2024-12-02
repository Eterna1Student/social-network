import Profile from "./Profile";
import React, {Component} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setUserProfileReducer} from "../../redux/slices/profileSlice";
import {useParams} from "react-router-dom";
import {usersAPI} from "../../api/api";


class ProfileClassAPI extends Component {
    componentDidMount() {
        usersAPI.getUserId(this.props.userId).then(data => {
                this.props.dispatch(setUserProfileReducer(data))
            })
    }

    render() {
        return <Profile {...this.props} />
    }
}

export const ProfileContainer = () => {
    const profileData = useSelector((state) => state.profileSlice.profile)
    const dispatch = useDispatch();
    const userId = useParams()


    return <ProfileClassAPI profileData={profileData}
                            dispatch={dispatch}
                            userId={userId.userId}/>
}
