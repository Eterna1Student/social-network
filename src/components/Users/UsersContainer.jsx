
import Users from "./Users";
import {useDispatch, useSelector} from "react-redux";
import {followReducer, unfollowReducer, setUsersReducer} from "../../redux/slices/usersSlice";
import UsersClass from "./UsersClass";


const UsersContainer = () => {
    const users = useSelector((state) => state.usersSlice.users);

    const dispatch = useDispatch();

    let follow = (userID) => dispatch(followReducer(userID))
    let unfollow = (userID) => dispatch(unfollowReducer(userID))
    let setUsers = (newUsers) => dispatch(setUsersReducer(newUsers))

    return <UsersClass users={users}
                  follow={follow}
                  unFollow={unfollow}
                  setUsers={setUsers}/>
}

export default UsersContainer;