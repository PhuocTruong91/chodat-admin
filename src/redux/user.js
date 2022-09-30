import { createStore } from 'redux';

//creare reducer
var userInfo = (state = {}, action) =>{
    switch (action.type) {
        case 'GET':
            return action.data;
        default:
            break;
    }
    return state;
}

export const userInfoStore = createStore(userInfo);