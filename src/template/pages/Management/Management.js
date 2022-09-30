import React from 'react'

import MainUserInfo from './component/MainUserInfo';
import SideUserInfo from './component/SideUserInfo';

import {managementFeatureStore} from '../../../redux/management'
import '../../../css/management.scss'
import { getUserInfo } from '../../../controller/User';
import {userInfoStore} from '../../../redux/user';

function Management(props) {
    const [activeTab, setActiveTab] = React.useState(new URLSearchParams(window.location.search).get('tab'));
    const [init, setInit] = React.useState(0);
    const [user, setUser] = React.useState({});

    React.useEffect(() =>{
        if(init === 0){
            // getUserInfo().then((res) => {
            //     if(!res.isSuccess){
            //         window.location.href = '/signinsignup';
            //     }
            // });
            getUserInfo();
        }
        setInit(1)
    },[init])

    userInfoStore.subscribe (() =>{
        if(userInfoStore.getState().id.length > 0){
            window.user = userInfoStore.getState();
            setUser(userInfoStore.getState());
        }
    })

    managementFeatureStore.subscribe(() =>{
        setActiveTab(managementFeatureStore.getState());
    })
    return ( 
        <div className="management">
            <div className='container'>
                <SideUserInfo setActiveTab={setActiveTab} activeTab={parseInt(activeTab)}></SideUserInfo>
                <MainUserInfo setActiveTab={setActiveTab} activeTab={parseInt(activeTab)}></MainUserInfo>
            </div>
        </div>
    );
}

export default Management;