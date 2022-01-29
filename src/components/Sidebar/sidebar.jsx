import React from "react";
import classes from "./sidebar.module.css";
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return <nav className={classes.sidebar}>
        <div className={classes.item}><NavLink to="/profile" >Profile</NavLink></div>
        <div className={classes.item}><NavLink to="/dialogs">Messages</NavLink></div>
        <div className={classes.item}><a>Feed</a></div>
        <div className={classes.item}><a>Settings</a></div>
        <div className={classes.item}><a>Friends</a></div>
    </nav>;
}

export default Sidebar;