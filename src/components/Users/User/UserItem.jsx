import React from "react";

const UserItem = (props) => {
    let changeStatus = () => {
        props.changeStatus(props.id);

    }

     return <div>
         {props.id}:{props.name} Из города props.location.city, props.location.country
         <button onClick={changeStatus}>{props.followed ? 'Отписаться': 'Подписаться'}</button>
    </div>
}
export default UserItem;