import ACTION_TYPES from '../Actions/ActionTypes'

const INITIAL_STATE = {
    notifications : {}
  };
  


export default (state = INITIAL_STATE, action) => {

    switch(action.type){

         case ACTION_TYPES.GET_ALL_NOTIFICATIONS :
           return { ...state, getAllNotificationsResp: action.payload}
         default:
                return state;
    }
}


