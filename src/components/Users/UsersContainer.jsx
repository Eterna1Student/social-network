import {useDispatch, useSelector} from "react-redux";
import {
    followReducer,
    unfollowReducer,
    setUsersReducer,
    setCurrentPageReducer, setTotalCountReducer, setFetchingReducer, setFollowingReducer
} from "../../redux/slices/usersSlice";
import React, {Component} from "react";
import UsersPresent from "./UsersPresent";
import Loader from "../../common/Loader/Loader";
import {usersAPI} from "../../api/api";

class UsersClassAPI extends Component {
    componentDidMount = () => {
        this.props.toggleFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.toggleFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalCount(data.totalCount)
            })
    }
    onPageChanged = (page) => {
        this.props.setCurrentPage(page)
        this.props.toggleFetching(true)
        usersAPI.getUsers(page, this.props.pageSize).then(data => {
                this.props.toggleFetching(false)
                this.props.setUsers(data.items)
            })
    }

    render() {
        return <>
            { this.props.isFetching ? <Loader /> : null }
            <UsersPresent users={this.props.users}
                          totalUsersCount={this.props.totalUsersCount}
                          pageSize={this.props.pageSize}
                          currentPage={this.props.currentPage}
                          onPageChanged={this.onPageChanged}
                          follow={this.props.follow}
                          unFollow={this.props.unfollow}
                          toggleFollowingProgress={this.props.toggleFollowingProgress}
                          followingProgress={this.props.followingProgress}
            />

        </>
    }
}

const UsersContainer = () => {
    const users = useSelector((state) => state.usersSlice.users)
    const pageSize = useSelector((state) => state.usersSlice.pageSize)
    const totalUsersCount = useSelector((state) => state.usersSlice.totalUsersCount)
    const currentPage = useSelector((state) => state.usersSlice.currentPage)
    const isFetching = useSelector((state) => state.usersSlice.isFetching)
    const followingProgress = useSelector((state) => state.usersSlice.followingProgress)

    const dispatch = useDispatch();

    let follow = (userID) => dispatch(followReducer(userID))
    let unfollow = (userID) => dispatch(unfollowReducer(userID))
    let setUsers = (newUsers) => dispatch(setUsersReducer(newUsers))
    let setCurrentPage = (pageNum) => dispatch(setCurrentPageReducer(pageNum))
    let setTotalCount = (totalCount) => dispatch(setTotalCountReducer(totalCount))
    let toggleFetching = (fetch) => dispatch(setFetchingReducer(fetch))
    let toggleFollowingProgress = (tab, userID) => dispatch(setFollowingReducer({tab, userID}))

    return <UsersClassAPI users={users}
                          pageSize={pageSize}
                          totalUsersCount={totalUsersCount}
                          isFetching={isFetching}
                          followingProgress={followingProgress}
                          follow={follow}
                          unfollow={unfollow}
                          setUsers={setUsers}
                          setCurrentPage={setCurrentPage}
                          toggleFetching={toggleFetching}
                          currentPage={currentPage}
                          setTotalCount={setTotalCount}
                          toggleFollowingProgress={toggleFollowingProgress}
                          />
}

export default UsersContainer;