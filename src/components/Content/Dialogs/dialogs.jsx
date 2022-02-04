import React from "react";
import classes from "./dialogs.module.css";
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem.jsx";
import Message from "./MessageItem/Message";
import {addNewMessageDispatcher, updateNewMessageTextDispatcher} from "../../../redux/dialogs-reducer";

const Dialogs = (props) => {


    let dialogs = props.names.map(friend => <DialogItem id={friend.id} name={friend.name}/>);
    let messages = props.messages.map(message => <Message text = {message.text}/>);

    let addMessage = () => {
        //props.dispatch(addNewMessageDispatcher());
        //props.dispatch(updateNewMessageTextDispatcher(' '));
        props.addMessage();
    }
    let onMessageChange = (e) => {
        let text = e.target.value;
       //props.dispatch(updateNewMessageTextDispatcher(text));
        props.onMessageChange(text);
    }


    return (
        <div className={classes.container}>
            <div className={classes.friends}>
                {dialogs}
            </div>
            <div className={classes.messages}>
                <div>
                    Hello, wassup
                </div>
                <div>
                    {messages}
                    <textarea value={props.newMessageText}  onChange={onMessageChange}/>
                    <button onClick={addMessage} >Добавить</button>
                </div>
            </div>
        </div>

    )
}

export default Dialogs;