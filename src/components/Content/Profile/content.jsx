import React from "react";

import classes from "./content.module.css"
import Post from "../Post/Post";
import {addNewPostDispatcher, updateNewPostTextDispatcher} from "../../../redux/profile-reducer";


const Content = (props) => {

    let newPostField = React.createRef();

    let addPost = () => {
        props.addPost();
        //props.dispatch(addNewPostDispatcher());
        //props.dispatch({type:'UPDATE-NEW-POST-TEXT', newText: ''});

    }
    let messageElements = props.posts
        .map(post => <Post message={post.message} id={post.id} />);

    let onPostChange = () => {
        let text = newPostField.current.value;
        props.updateNewPostText(text);
        //props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
    }

    return <div className={classes.content}>
            <div>
            <textarea onChange={onPostChange} ref={newPostField} value={props.newPostText} />
                <button onClick={addPost}>Добавить</button>
            </div>
        {messageElements}
    </div>
}

export default Content;