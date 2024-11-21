import Profile from "./Profile";
import React, {Component} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setUserProfileReducer} from "../../redux/slices/profileSlice";
import {useParams} from "react-router-dom";


class ProfileClassAPI extends Component {
    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.userId}`)
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
    const userId = useParams()


    return <ProfileClassAPI profileData={profileData}
                            dispatch={dispatch}
                            userId={userId.userId}/>
}
