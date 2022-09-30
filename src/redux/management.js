import {createStore} from 'redux'
import {MANAGEMENT_FEATURE} from '../define/management_define'

var managementFeatureActive = (state = 1, action) =>{
    switch (action.type) {
        case MANAGEMENT_FEATURE.changeInfo:
            return MANAGEMENT_FEATURE.changeInfo;
        case MANAGEMENT_FEATURE.changePass:
            return MANAGEMENT_FEATURE.changePass;
        case MANAGEMENT_FEATURE.postBuy:
            return MANAGEMENT_FEATURE.postBuy;
        case MANAGEMENT_FEATURE.postRent:
            return MANAGEMENT_FEATURE.postRent;
        case MANAGEMENT_FEATURE.balanceInfo:
            return MANAGEMENT_FEATURE.balanceInfo;
        case MANAGEMENT_FEATURE.transferHistory:
            return MANAGEMENT_FEATURE.transferHistory;
        case MANAGEMENT_FEATURE.topup:
            return MANAGEMENT_FEATURE.topup;
        default:
            return state;
    }
}

export const managementFeatureStore= createStore(managementFeatureActive);