import ACTION_TYPES from '../Actions/ActionTypes'

const INITIAL_STATE = {
    providers : {}
  };
  


export default (state = INITIAL_STATE, action) => {

    switch(action.type){

        case ACTION_TYPES.GET_PROVIDERS : 
         return { ...state, providerResp: action.payload };

         case ACTION_TYPES.GET_VMS_FOR_PROVIDER : 
         return { ...state, vmsForProviderResp: action.payload };

         case ACTION_TYPES.GET_ALL_NOTIFICATIONS :
           return { ...state, getAllNotificationsResp: action.payload}
         default:
                return state;
    }
}


