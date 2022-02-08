let initialState = {
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
}
const profileReducer = (state = initialState, action) => {

    if(action.type === 'ADD-POST') {
        let newPost = {
            id:Math.floor(Math.random() * 100),
            message: state.newPostText
        }
        let stateCopy = {...state};
        stateCopy.posts = [...state.posts];
        stateCopy.posts.push(newPost);
        stateCopy.newPostText = '';
        return stateCopy;
    }
    else if (action.type==='UPDATE-NEW-POST-TEXT') {
        let stateCopy = {...state};
        stateCopy.newPostText = action.newText;
        return stateCopy;
    }
    return state;
}
export const updateNewPostTextDispatcher = (text) => ({type:'UPDATE-NEW-POST-TEXT', newText: text});
export const addNewPostDispatcher = () =>  ({type:'ADD-POST'});
export default profileReducer;