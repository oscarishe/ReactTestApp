import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {changeStatusDispatcher, setUsersDispatcher} from "../../redux/users-reducer";



let mapStateToProps = (state) => {

    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        changeStatus: (id) => {
            dispatch(changeStatusDispatcher(id))
        },
        setUsers: (users) => {
            dispatch(setUsersDispatcher(users))
        }
    }

}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;