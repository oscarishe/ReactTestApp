import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./item.module.css";

const DialogItem = (props) => {
    return (
    <div classname = {classes.item}>
           <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
    )
}

export default DialogItem;