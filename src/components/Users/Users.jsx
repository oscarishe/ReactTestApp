import React from "react";
import UserItem from "./User/UserItem";
import axios from "axios";
const Users = (props) => {

        // if(props.users.length===0) {
        // props.setUsers([{ id:1, name:'Alexis Sanchez', followed: true, location: {city: 'Minsk', country: 'Belarus'}},
        //     { id:2, name:'Juan Pablo El Primo', followed: false, location: {city: 'Minsk', country: 'Belarus'}},
        //     { id:3, name:'Sergio Puerto', followed: true, location: {city: 'Minsk', country: 'Belarus'}}]);
        // }
        if(props.users.length ===0 ) {
                axios.get("https://social-network.samuraijs.com/api/1.0/users").
                then(response => {
                        props.setUsers(response.data.items);
                }
                );
        }

        let users = props.users.map(user => <UserItem changeStatus = {props.changeStatus}
                                                      id={user.id}
                                                      name = {user.name}
                                                      followed = {user.followed} location = {user.location}/>);
        return (
            <div>
                {users}
            </div>
        )

}

export default Users;