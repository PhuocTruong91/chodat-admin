import {api} from './config';
import {spinnerStart, spinnerStop, isSuccessOTPStore, isFailOTPStore, isConfirmAccountStore, isUpdateUserSuccessStore, isUpdateUserFailStore} from '../redux/display';
import {userInfoStore} from '../redux/user';

import axios from 'axios';

export async function logIn(data){
    var result ={}
    result.success = false;
    var baseUrl = api.user.post.login;

    spinnerStart();

    await axios.post(baseUrl, data)
    .then((res) => {
        if(res.data.status === 200){
            localStorage.setItem('token', res.data.data.token);
            localStorage.setItem('userId', res.data.data.user_info.id);
            result.success = true;
            getUserInfo();
        }else{
            result = res.data;
            result.success = false;
        }
        spinnerStop();
    })
    .catch((err) => {
        console.log(err);
        spinnerStop();
    })

    return result;
}

export async function getUserInfo(){
    var baseUrl = api.user.get.getUser + localStorage.userId;
    var result = {};

    const config = {
        headers:{
            "Content-Type" : "application/json",
            Authorization : "Bearer " + localStorage.token,
            Accept: "application/json"
        }
    }
    await axios.get(baseUrl, config)
    .then((res) => {
        userInfoStore.dispatch({type: "GET", data: res.data.data});
        result = {isSuccess: true, data: res.data.data};
        spinnerStop();
    })
    .catch((err) => {
        result = {isSuccess: false};
        spinnerStop();
    })

    return result;
} 

export async function  isAccountExist (phone){
    var result = {}
    result.isExist = false;

    var baseUrl = api.user.get.checkAccount + phone;

    await axios.get(baseUrl)
    .then((res) => {
        if(res.data.code === 2){
            result.isExist = true;
            result.message = res.data.message;
        }
    })
    .catch((err) => {
        console.log(err);
    })

    return result;
}

export function updateUserInfo (idUser, data){
    var baseUrl = api.user.put.updateUser + idUser;

    data =  {
        "birthday": data.birthday,
        "districtId": data.districtId,
        "email": data.email,
        "firstName": data.firstName,
        "gender": data.gender,
        "phone": data.phone,
        "provinceId": data.provinceId,
        "streetName": data.streetName,
        "wardId": data.wardId
    }
    spinnerStart();
    axios({
        method: "put",
        url: baseUrl,
        data: data,
        headers: {
            "Content-Type" : "application/json",
            Authorization : "Bearer " + localStorage.token,
            Accept: "application/json",
        }
    })
    .then((res) => {
        if(res.status === 200){
            isUpdateUserSuccessStore.dispatch({type: 'DISPLAY_YES'});
        }else{
            isUpdateUserFailStore.dispatch({type: 'DISPLAY_YES'});
        }
        getUserInfo();
        spinnerStop();
    })
    .catch((err) => {
        console.log(err);
        isUpdateUserFailStore.dispatch({type: 'DISPLAY_YES'});
        spinnerStop();
    })
}

export async function uploadAvatar(file){
    var result ={}
    var baseUrl = api.user.post.uploadAvatar;

    var formData = new FormData();
    formData.append('file', file);
    spinnerStart();
    await axios({
        method: "post",
        url: baseUrl,
        data: formData,
        headers: {
            "Content-Type" : "application/json",
            Authorization : "Bearer " + localStorage.token,
            Accept: "application/json",
        }
    })
    .then((res) => {
        result = res.data;
        getUserInfo();
        spinnerStop();
    })
    .catch((err) => {
        console.log(err);
        spinnerStop();
    })

    return result;
}
 