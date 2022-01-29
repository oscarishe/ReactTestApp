import React from "react";

import classes from "./post.module.css"

const Post = (props) => {
    return (
        <div className={classes.item}>
            <h1>{props.id}</h1>
            <p>{props.message}</p>
        </div>
        );

}

export default Post;