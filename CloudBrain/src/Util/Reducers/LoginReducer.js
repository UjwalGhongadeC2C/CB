


import ACTION_TYPES from '../Actions/ActionTypes'

const INITIAL_STATE = {
    signInUser: "",
    userAuthorize: false
  };
  


export default (state = INITIAL_STATE, action) => {

    switch(action.type){

        case ACTION_TYPES.LOGIN :
         return { ...state, userLoginResponse: action.payload };

         case ACTION_TYPES.GET_USER_DETAILS : 
         return { ...state, userDetailsResponse: action.payload };
         default:
                return state;    
    }

}