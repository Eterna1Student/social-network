import {Component} from "react";
import Header from "./Header";
import {setAuthUserDataReducer} from "../../redux/slices/authSlice";
import {useDispatch, useSelector} from "react-redux";
import {usersAPI} from "../../api/api";

class HeaderContainerAPI extends Component {
    componentDidMount() {
        usersAPI.getMe().then(data => {
                if(data.resultCode === 0) {
                    this.props.dispatch(setAuthUserDataReducer(data.data))
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