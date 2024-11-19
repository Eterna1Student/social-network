import Profile from "./Profile";
import React, {Component} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setUserProfileReducer} from "../../redux/slices/profileSlice";


class ProfileClassAPI extends Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.dispatch(setUserProfileReducer(response.data))
            })
    }
    render() {
        return <Profile {...this.props} />
    }
}

export const ProfileContainer = () => {
    const profileData = useSelector((state) => state.profileSlice.profile)
    const dispatch = useDispatch();

    return <ProfileClassAPI profileData={profileData}
                            dispatch={dispatch}/>
}
