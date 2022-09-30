import { createStore } from 'redux';

//creare reducer
var isSignUp = (state = false, action) =>{
    switch (action.type) {
        case 'TOGGLE':
            return !state;
        case 'DISPLAY_YES':
            return true;
        case 'DISPLAY_NO':
            return false;
        default:
            break;
    }
    return state;
}

var isSignIn = (state = false, action) =>{
    switch (action.type) {
        case 'TOGGLE':
            return !state;
        case 'DISPLAY_YES':
            return true;
        case 'DISPLAY_NO':
            return false;
        default:
            break;
    }
    return state;
}

var isSpinner = (state = false, action) =>{
    switch (action.type) {
        case 'TOGGLE':
            return !state;
        case 'DISPLAY_YES':
            return true;
        case 'DISPLAY_NO':
            return false;
        default:
            break;
    }
    return state;
}

var isContactRequest = (state = false, action) =>{
    switch (action.type) {
        case 'TOGGLE':
            return !state;
        case 'DISPLAY_YES':
            return true;
        case 'DISPLAY_NO':
            return false;
        default:
            break;
    }
    return state;
}

var isConfirmAccount = (state = false, action) =>{
    switch (action.type) {
        case 'TOGGLE':
            return !state;
        case 'DISPLAY_YES':
            return true;
        case 'DISPLAY_NO':
            return false;
        default:
            break;
    }
    return state;
}

var isSuccess = (state = false, action) =>{
    switch (action.type) {
        case 'TOGGLE':
            return !state;
        case 'DISPLAY_YES':
            return true;
        case 'DISPLAY_NO':
            return false;
        default:
            break;
    }
    return state;

}
var isFail = (state = false, action) =>{
    switch (action.type) {
        case 'TOGGLE':
            return !state;
        case 'DISPLAY_YES':
            return true;
        case 'DISPLAY_NO':
            return false;
        default:
            break;
    }
    return state;
}
var isPostSuccess = (state = false, action) =>{
    switch (action.type) {
        case 'TOGGLE':
            return !state;
        case 'DISPLAY_YES':
            return true;
        case 'DISPLAY_NO':
            return false;
        default:
            break;
    }
    return state;
}
var isPostFail = (state = false, action) =>{
    switch (action.type) {
        case 'TOGGLE':
            return !state;
        case 'DISPLAY_YES':
            return true;
        case 'DISPLAY_NO':
            return false;
        default:
            break;
    }
    return state;
}
var isPostWaiting = (state = false, action) =>{
    switch (action.type) {
        case 'TOGGLE':
            return !state;
        case 'DISPLAY_YES':
            return true;
        case 'DISPLAY_NO':
            return false;
        default:
            break;
    }
    return state;
}
var isConfirmDelete = (state = false, action) =>{
    switch (action.type) {
        case 'TOGGLE':
            return !state;
        case 'DISPLAY_YES':
            return true;
        case 'DISPLAY_NO':
            return false;
        default:
            break;
    }
    return state;
}
var isSuccessOTP = (state = false, action) =>{
    switch (action.type) {
        case 'TOGGLE':
            return !state;
        case 'DISPLAY_YES':
            return true;
        case 'DISPLAY_NO':
            return false;
        default:
            break;
    }
    return state;
}
var isFailOTP = (state = false, action) =>{
    switch (action.type) {
        case 'TOGGLE':
            return !state;
        case 'DISPLAY_YES':
            return true;
        case 'DISPLAY_NO':
            return false;
        default:
            break;
    }
    return state;
}

var isNewsSuccess = (state = false, action) =>{
    switch (action.type) {
        case 'TOGGLE':
            return !state;
        case 'DISPLAY_YES':
            return true;
        case 'DISPLAY_NO':
            return false;
        default:
            break;
    }
    return state;
}

var isNewsFail = (state = false, action) =>{
    switch (action.type) {
        case 'TOGGLE':
            return !state;
        case 'DISPLAY_YES':
            return true;
        case 'DISPLAY_NO':
            return false;
        default:
            break;
    }
    return state;
}

var isUpdateUserSuccess = (state = false, action) =>{
    switch (action.type) {
        case 'TOGGLE':
            return !state;
        case 'DISPLAY_YES':
            return true;
        case 'DISPLAY_NO':
            return false;
        default:
            break;
    }
    return state;
}

var isUpdateUserFail = (state = false, action) =>{
    switch (action.type) {
        case 'TOGGLE':
            return !state;
        case 'DISPLAY_YES':
            return true;
        case 'DISPLAY_NO':
            return false;
        default:
            break;
    }
    return state;
}

var isNewsFail = (state = false, action) =>{
    switch (action.type) {
        case 'TOGGLE':
            return !state;
        case 'DISPLAY_YES':
            return true;
        case 'DISPLAY_NO':
            return false;
        default:
            break;
    }
    return state;
}

export var isSignUpStore = createStore(isSignUp);
export var isSignInStore = createStore(isSignIn);
export var isContactRequestStore = createStore(isContactRequest);
export var isSpinnerStore = createStore(isSpinner);
export var isConfirmAccountStore = createStore(isConfirmAccount);
export var isSuccessStore = createStore(isSuccess);
export var isFailStore = createStore(isFail);
export var isPostSuccessStore = createStore(isPostSuccess);
export var isPostFailStore = createStore(isPostFail);
export var isPostWaitingStore = createStore(isPostWaiting);
export var isConfirmDeleteStore = createStore(isConfirmDelete);
export var isSuccessOTPStore = createStore(isSuccessOTP);
export var isFailOTPStore = createStore(isFailOTP);
export var isNewsSuccessStore = createStore(isNewsSuccess);
export var isNewsFailStore = createStore(isNewsFail);
export var isUpdateUserSuccessStore = createStore(isUpdateUserSuccess);
export var isUpdateUserFailStore = createStore(isUpdateUserFail);

export function spinnerStart(){
    isSpinnerStore.dispatch({type:'DISPLAY_YES'});
}
export function spinnerStop(){
    isSpinnerStore.dispatch({type:'DISPLAY_NO'});
}