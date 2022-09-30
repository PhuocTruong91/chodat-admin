import axios from "axios"

axios.defaults.baseURL = 'https://api.chodat.net.vn/api'
export const urlImg = 'https://api.chodat.net.vn/upload'

export const api ={
    user: {
        get:{
            checkAccount: '/auth/check/account/', //BE: /auth/check/account/{id}
            getUser: '/v1/user/' //BE: /v1/user/{id}
        },
        post: {
            register: '/auth/register',
            sendOtp: '/auth/otp/send',
            verifyOtp: '/auth/otp/verify/account',
            login: '/auth/login',
            uploadAvatar: '/v1/user/upload/avatar'
        },
        put: {
            updateUser: '/v1/user/' //BE: /v1/user/{userId}
        }
    },
    file: {
        post: {
            upload: '/v1/product/file/upload', //upload file to server
            uploadImgNews: '/admin/news/file/upload', //upload file to server
        },
        delete:{
            file: '/v1/product/file/remove'
        }
    },
}