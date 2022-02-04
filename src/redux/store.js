import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
    _state : {
        profilePage: {
            newPostText: 'empty field',
            posts: [
                {
                    id: 0,
                    message: "hello world"
                },
                {
                    id: 1,
                    message: "i am the god"
                },
                {
                    id: 2,
                    message: "u are idiot man"
                },
                {
                    id:3,
                    message: "Я только проснулся"
                }
            ]
        },
        dialogPage: {
            names:[
                {id:1, name:'Alexey'},
                {id:2, name:'Anaximandr'},
                {id:3, name:'Evkakiy'}],
            messages: [
                {text: 'hello'},
                {text: 'wassup'}
            ],
            newMessageText: ' '
        }
    },
    getState() {
        return this._state;
    },
    rerenderEntireTree() {
        console.log("Tree was rerendered");
    },
    subscribe (observer){
        this.rerenderEntireTree = observer;
    },
    dispatch(action) {
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this.rerenderEntireTree(this._state);
    }
}







export default store;