import React from 'react';

import {MANAGEMENT_FEATURE} from '../../../../define/management_define';
import {formatDateTime} from '../../../../helper/dateTimeHelper';
import {formatMoney} from '../../../../helper/moneyHelper';
import {uploadAvatar} from '../../../../controller/User';
import { urlImg } from '../../../../controller/config';

import { Link } from 'react-router-dom';

function SideUserInfo(props) {
    const [activeMenuMobile, setActiveMenuMobile] = React.useState(false);
    const activeTab = props.activeTab;
    const setActiveTab = props.setActiveTab;
    var selectedTabName = ''
    switch (activeTab) {
        case MANAGEMENT_FEATURE.users:
            selectedTabName = 'Danh sách Users';
            break;
        case MANAGEMENT_FEATURE.listNews:
            selectedTabName = 'Danh sách tin tức';
            break;
        case MANAGEMENT_FEATURE.postNews:
            selectedTabName = 'Đăng tin tức';
            break;
        case MANAGEMENT_FEATURE.project:
            selectedTabName = 'Danh sách tin đăng BĐS';
            break;
        case MANAGEMENT_FEATURE.postProject:
            selectedTabName = 'Đăng tin dự án bất động sản';
            break;
        default:
            break;
    }

    function updateActiveTab(id){
        setActiveTab(id);
        showMenuMobile();
    }

    function showMenuMobile (){
        setActiveMenuMobile(!activeMenuMobile)
    }

    function handleUploadImg(){
        uploadAvatar(document.querySelector('input[name="upload-avatar"]').files[0]);
    }

    return (
            window.innerWidth > 768 ? 
            <div className="side-user-info">
            <input type="file" name="upload-avatar" className="d-none" onChange={handleUploadImg} accept=".jpg, .jpeg, .png,"></input>
            <div className="basic-info">
                {
                    window.user ?
                    <div className='image-group'>
                        <img src={urlImg + window.user.avatar} alt ="avatar" className='account-avatar'>
                        </img>
                        <svg onClick={() => {document.querySelector('[name="upload-avatar"]').click()}} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.207 20.2025H21.207" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16.707 3.7025C17.1049 3.30467 17.6444 3.08118 18.207 3.08118C18.4856 3.08118 18.7615 3.13605 19.0188 3.24265C19.2762 3.34926 19.51 3.50551 19.707 3.7025C19.904 3.89948 20.0603 4.13333 20.1669 4.3907C20.2735 4.64807 20.3284 4.92392 20.3284 5.2025C20.3284 5.48107 20.2735 5.75692 20.1669 6.01429C20.0603 6.27166 19.904 6.50551 19.707 6.7025L7.20703 19.2025L3.20703 20.2025L4.20703 16.2025L16.707 3.7025Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    :
                    <>
                        <div className='no-avatar' onClick={() => {document.querySelector('[name="upload-avatar"]').click()}}>
                            <svg width="30" height="30" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1401_2)">
                                <path d="M23.0176 19.4891C23.0176 20.0196 22.8069 20.5283 22.4318 20.9033C22.0567 21.2784 21.548 21.4891 21.0176 21.4891H3.01758C2.48715 21.4891 1.97844 21.2784 1.60336 20.9033C1.22829 20.5283 1.01758 20.0196 1.01758 19.4891V8.48914C1.01758 7.9587 1.22829 7.44999 1.60336 7.07492C1.97844 6.69985 2.48715 6.48914 3.01758 6.48914H7.01758L9.01758 3.48914H15.0176L17.0176 6.48914H21.0176C21.548 6.48914 22.0567 6.69985 22.4318 7.07492C22.8069 7.44999 23.0176 7.9587 23.0176 8.48914V19.4891Z" stroke="#AFAFAF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12.0176 17.4891C14.2267 17.4891 16.0176 15.6983 16.0176 13.4891C16.0176 11.28 14.2267 9.48914 12.0176 9.48914C9.80844 9.48914 8.01758 11.28 8.01758 13.4891C8.01758 15.6983 9.80844 17.4891 12.0176 17.4891Z" stroke="#AFAFAF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_1401_2">
                                <rect width="24" height="24" fill="white" transform="translate(0.0175781 0.489136)"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </>
                }
                <p className="user-name">{window.user.firstName}</p>
                <div className="line"></div>
                <p className="day-join-title">ngày tham gia</p>
                <p className="day-join">{formatDateTime(window.user.createdAt)}</p>
            </div>
            
            <div className="group-management">
                <div className="users-management management-item">
                    <p className="title">Quản lý users</p>
                    <ul>
                        <li onClick={() => {updateActiveTab(MANAGEMENT_FEATURE.users)}} className={activeTab === MANAGEMENT_FEATURE.users ? 'active' : ''}><Link to={'/management?tab=' + MANAGEMENT_FEATURE.users}>DANH SÁCH USERS </Link></li>
                    </ul>
                </div>
                <div className="news-management management-item">
                    <p className="title">Quản lý tin tức</p>
                    <ul>
                        <li onClick={() => {updateActiveTab(MANAGEMENT_FEATURE.listNews )}} className={activeTab === MANAGEMENT_FEATURE.listNews ? 'active' : ''}><Link to={'/management?tab=' + MANAGEMENT_FEATURE.listNews}>DANH SÁCH TIN TỨC</Link></li>
                        <li onClick={() => {updateActiveTab(MANAGEMENT_FEATURE.postNews )}} className={activeTab === MANAGEMENT_FEATURE.postNews ? 'active' : ''}><Link to={'/management?tab=' + MANAGEMENT_FEATURE.postNews}>ĐĂNG TIN TỨC</Link></li>
                    </ul>
                </div>
                <div className="projects-management management-item">
                    <p className="title">QUẢN LÝ TIN DỰ ÁN BĐS</p>
                    <ul>
                        <li onClick={() => {updateActiveTab(MANAGEMENT_FEATURE.project )}} className={activeTab === MANAGEMENT_FEATURE.project ? 'active' : ''}><Link to={'/management?tab=' + MANAGEMENT_FEATURE.project}>DANH SÁCH TIN DỰ ÁN BĐS</Link></li>
                        <li onClick={() => {updateActiveTab(MANAGEMENT_FEATURE.postProject )}} className={activeTab === MANAGEMENT_FEATURE.postProject ? 'active' : ''}><Link to={'/management?tab=' + MANAGEMENT_FEATURE.postProject}>ĐĂNG TIN DỰ ÁN BĐS</Link></li>
                    </ul>
                </div>
            </div>
        </div>:
        <div className="side-user-mobile">
            <div className='container'>
                <p className='main-item' onClick={showMenuMobile}>
                    <span>{selectedTabName}</span>
                    <svg className={activeMenuMobile ? 'active' : ''} width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.39453 1.06641L7.39453 7.06641L13.3945 1.06641" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </p>
                <div className={'nav-options ' + (activeMenuMobile ? 'active' : '')}>
                    <div className="users-management management-item">
                        <p className="title">Quản lý users</p>
                        <ul>
                            <li onClick={() => {updateActiveTab(MANAGEMENT_FEATURE.users)}} className={activeTab === MANAGEMENT_FEATURE.users ? 'active' : ''}><Link to={'/management?tab=' + MANAGEMENT_FEATURE.users}>DANH SÁCH USERS </Link></li>
                        </ul>
                    </div>
                    <div className="news-management management-item">
                        <p className="title">Quản lý tin tức</p>
                        <ul>
                            <li onClick={() => {updateActiveTab(MANAGEMENT_FEATURE.listNews )}} className={activeTab === MANAGEMENT_FEATURE.listNews ? 'active' : ''}><Link to={'/management?tab=' + MANAGEMENT_FEATURE.listNews}>DANH SÁCH TIN TỨC</Link></li>
                            <li onClick={() => {updateActiveTab(MANAGEMENT_FEATURE.postNews )}} className={activeTab === MANAGEMENT_FEATURE.postNews ? 'active' : ''}><Link to={'/management?tab=' + MANAGEMENT_FEATURE.postNews}>ĐĂNG TIN TỨC</Link></li>
                        </ul>
                    </div>
                    <div className="projects-management management-item">
                        <p className="title">QUẢN LÝ TIN DỰ ÁN BĐS</p>
                        <ul>
                            <li onClick={() => {updateActiveTab(MANAGEMENT_FEATURE.project )}} className={activeTab === MANAGEMENT_FEATURE.project ? 'active' : ''}><Link to={'/management?tab=' + MANAGEMENT_FEATURE.project}>DANH SÁCH TIN DỰ ÁN BĐS</Link></li>
                            <li onClick={() => {updateActiveTab(MANAGEMENT_FEATURE.postProject )}} className={activeTab === MANAGEMENT_FEATURE.postProject ? 'active' : ''}><Link to={'/management?tab=' + MANAGEMENT_FEATURE.postProject}>ĐĂNG TIN DỰ ÁN BĐS</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default SideUserInfo;