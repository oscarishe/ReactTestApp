import React from "react";
import classes from "./dialogs.module.css";
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem.jsx";
import Message from "./MessageItem/Message";
import {addNewMessageDispatcher, updateNewMessageTextDispatcher} from "../../../redux/dialogs-reducer";
import Dialogs from "./dialogs";
import {updateNewPostTextDispatcher} from "../../../redux/profile-reducer";

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogPage;


    let addMessage = () => {
        props.store.dispatch(addNewMessageDispatcher());
        props.store.dispatch(updateNewPostTextDispatcher(' '));

    }
    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextDispatcher(text));
    }


    return <Dialogs onMessageChange = {onMessageChange}
                    addMessage = {addMessage}
                    names = {state.names}
                    messages = {state.messages}
                    newMessageText = {state.newMessageText}
    />
}

export default DialogsContainer;