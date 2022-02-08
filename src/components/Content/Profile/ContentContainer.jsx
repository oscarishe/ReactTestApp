import React from "react";


import {addNewPostDispatcher, updateNewPostTextDispatcher} from "../../../redux/profile-reducer";
import Content from "./content";
import {connect} from "react-redux";



let mapStateToProps = (state) => {

    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onPostChange:(text) => {
            dispatch(updateNewPostTextDispatcher(text));
        },
        addPost: () => {
            dispatch(addNewPostDispatcher());

        }
    }
}
const ContentContainer = connect(mapStateToProps, mapDispatchToProps)(Content);
export default ContentContainer;