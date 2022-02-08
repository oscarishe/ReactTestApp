let initialState = {
    users: [

    ]
}
const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'CHANGE-STATUS' :
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.id) {
                        return {...u, followed: !u.followed}
                    }
                    return u;
                    }
                )
            }
        case 'SET-USERS' :
            return {...state, users: action.users}
        default :
            return state;
    }
}

export const changeStatusDispatcher = (id) =>  ({type:'CHANGE-STATUS', id: id});
export const setUsersDispatcher = (users) => ({type: 'SET-USERS', users:users})
export default  usersReducer;