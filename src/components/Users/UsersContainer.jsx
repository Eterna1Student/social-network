import {useDispatch, useSelector} from "react-redux";
import {
    followReducer,
    unfollowReducer,
    setUsersReducer,
    setCurrentPageReducer, setTotalCountReducer
} from "../../redux/slices/usersSlice";
import UsersClass from "./UsersClass";



const UsersContainer = () => {
    const users = useSelector((state) => state.usersSlice.users)
    const pageSize = useSelector((state) => state.usersSlice.pageSize)
    const totalUsersCount = useSelector((state) => state.usersSlice.totalUsersCount)
    const currentPage = useSelector((state) => state.usersSlice.currentPage)

    const dispatch = useDispatch();

    let follow = (userID) => dispatch(followReducer(userID))
    let unfollow = (userID) => dispatch(unfollowReducer(userID))
    let setUsers = (newUsers) => dispatch(setUsersReducer(newUsers))
    let setCurrentPage = (pageNum) => dispatch(setCurrentPageReducer(pageNum))
    let setTotalCount = (totalCount) => dispatch(setTotalCountReducer(totalCount))

    return <UsersClass users={users}
                       pageSize={pageSize}
                       totalUsersCount={totalUsersCount}
                       follow={follow}
                       unFollow={unfollow}
                       setUsers={setUsers}
                       setCurrentPage={setCurrentPage}
                       currentPage={currentPage}
                       setTotalCount={setTotalCount}/>
}

export default UsersContainer;