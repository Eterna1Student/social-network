import {useDispatch, useSelector} from "react-redux";
import {
    followReducer,
    unfollowReducer,
    setUsersReducer,
    setCurrentPageReducer, setTotalCountReducer, setFetchingReducer
} from "../../redux/slices/usersSlice";
import React, {Component} from "react";
import axios from "axios";
import UsersPresent from "./UsersPresent";
import Loader from "../../common/Loader/Loader";



class UsersClassAPI extends Component {
    componentDidMount = () => {
        this.props.toggleFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }
    onPageChanged = (page) => {
        this.props.setCurrentPage(page)
        this.props.toggleFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleFetching(false)
                this.props.setUsers(response.data.items)
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

    const dispatch = useDispatch();

    let follow = (userID) => dispatch(followReducer(userID))
    let unfollow = (userID) => dispatch(unfollowReducer(userID))
    let setUsers = (newUsers) => dispatch(setUsersReducer(newUsers))
    let setCurrentPage = (pageNum) => dispatch(setCurrentPageReducer(pageNum))
    let setTotalCount = (totalCount) => dispatch(setTotalCountReducer(totalCount))
    let toggleFetching = (fetch) => dispatch(setFetchingReducer(fetch))

    return <UsersClassAPI users={users}
                          pageSize={pageSize}
                          totalUsersCount={totalUsersCount}
                          follow={follow}
                          unfollow={unfollow}
                          setUsers={setUsers}
                          setCurrentPage={setCurrentPage}
                          toggleFetching={toggleFetching}
                          currentPage={currentPage}
                          setTotalCount={setTotalCount}
                          isFetching={isFetching}/>
}

export default UsersContainer;