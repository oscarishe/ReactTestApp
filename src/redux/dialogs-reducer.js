let initialState = {
    names:[
        {id:1, name:'Alexey'},
        {id:2, name:'Anaximandr'},
        {id:3, name:'Evkakiy'}],
    messages: [
        {text: 'hello'},
        {text: 'wassup'}
    ],
    newMessageText: ''
}
const dialogsReducer = (state = initialState, action) => {


    if(action.type === 'ADD-MESSAGE') {
        let newMessage = {
            text: state.newMessageText
        }
        let stateCopy = {...state};
        stateCopy.messages = [...state.messages];
        stateCopy.messages.push(newMessage);
        stateCopy.newMessageText = '';
        return stateCopy;
    }
    if(action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
        let stateCopy = {...state};
        stateCopy.newMessageText = action.newMessage;
        return stateCopy;
    }
    return state;
}

export const addNewMessageDispatcher = () => ({type:'ADD-MESSAGE'});
export const updateNewMessageTextDispatcher = (text) => ({type:'UPDATE-NEW-MESSAGE-TEXT', newMessage:text});
export default dialogsReducer;