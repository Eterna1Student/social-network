
import {Component} from "react";
import Header from "./Header";
import axios from "axios";
import {setAuthUserDataReducer} from "../../redux/slices/authSlice";
import {useDispatch, useSelector} from "react-redux";

class HeaderContainerAPI extends Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                if(response.data.resultCode === 0) {
                    this.props.dispatch(setAuthUserDataReducer(response.data.data))
                }
            })
    }
    render() {
        // console.log(this.props)
        return <Header {...this.props}/>
    }
}

export const HeaderContainer = () => {
    const dispatch = useDispatch();
    const authData = useSelector((state) => state.authSlice)
    return <HeaderContainerAPI dispatch={dispatch} authData={authData}/>
}