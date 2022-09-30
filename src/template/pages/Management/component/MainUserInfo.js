import {MANAGEMENT_FEATURE} from '../../../../define/management_define';

function MainUserInfo(props) {
    const activeTab = props.activeTab;
    var activeTabComponent = '';

    switch (activeTab) {
        // case MANAGEMENT_FEATURE.changeInfo:
        //     activeTabComponent = <Infomation></Infomation>
        //     break;
        // case MANAGEMENT_FEATURE.changePass:
        //     activeTabComponent = <ChangePassword></ChangePassword>
        //     break;
        // case MANAGEMENT_FEATURE.listPost:
        //     activeTabComponent = <PostManagement></PostManagement>
        //     break;
        // case MANAGEMENT_FEATURE.postBuy:
        //     activeTabComponent = <Post postType = {POST_TYPE.sell.code} setActiveTab={props.setActiveTab} type="sell"></Post>
        //     break;
        // case MANAGEMENT_FEATURE.postRent:
        //     activeTabComponent = <Post postType = {POST_TYPE.rent.code} setActiveTab={props.setActiveTab} type="rent"></Post>
        //     break;
        // case MANAGEMENT_FEATURE.paymentMethod:
        //     activeTabComponent = <PaymentMethod PaymentMethodType = {POST_TYPE.rent.code}></PaymentMethod>
        //     break;
        // case MANAGEMENT_FEATURE.topup:
        //     activeTabComponent = <TopUp></TopUp>
        //     break;
        // case MANAGEMENT_FEATURE.news:
        //     activeTabComponent = <NewsManagement></NewsManagement>
        //     break;
        // default:
        //     activeTabComponent = <Infomation></Infomation>
        //     break;
    }
    return ( 
        <div className="main-user-info">
            {activeTabComponent}
        </div>
     );
}

export default MainUserInfo;