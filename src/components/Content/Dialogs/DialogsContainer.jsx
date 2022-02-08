import React from "react";

import {addNewMessageDispatcher, updateNewMessageTextDispatcher} from "../../../redux/dialogs-reducer";
import Dialogs from "./dialogs";

import {connect} from "react-redux";


let mapStateToProps = (state) => {

    return {
        names: state.dialogPage.names,
        messages: state.dialogPage.messages,
        newMessageText: state.dialogPage.newMessageText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onMessageChange: (text) => {
            dispatch(updateNewMessageTextDispatcher(text));
        },
        addMessage: () => {
            dispatch(addNewMessageDispatcher());

        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;