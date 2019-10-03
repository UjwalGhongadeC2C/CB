
import ACTION_TYPES from './ActionTypes'
import API from '../APIConstants'


export const loginUser = data => {

    return { 
        type : API.N_USER_LOGIN,
        data

    }
}

export const getUserDetails = data => {

    return { 
        type : API.N_GET_USER_DETAILS,
        data

    }
}

export const getProviders = data => {

    return { 
        type : API.N_GET_PROVIDERS,
        data

    }
}

export const getVMSForProvider = data => {

    return { 
        type : API.N_GET_VMS_FOR_PROVIDER,
        data

    }
}

export const getAllNotificationsAction = data => {
    return {
        type : API.N_GET_ALL_NOTIFICATIONS,
        data
    }
}



