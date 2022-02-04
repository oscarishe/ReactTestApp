import React from "react";

import classes from "./content.module.css"
import Post from "../Post/Post";
import {addNewPostDispatcher, updateNewPostTextDispatcher} from "../../../redux/profile-reducer";
import Content from "./content";


const ContentContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addNewPostDispatcher());
        props.store.dispatch(updateNewPostTextDispatcher(' '));

    }


    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextDispatcher(text));

    }

    return <Content updateNewPostText = {onPostChange}
                    addPost = {addPost}
                    posts = {state.profilePage.posts}
                    newPostText = {state.profilePage.newPostText}
                    />
}

export default ContentContainer;