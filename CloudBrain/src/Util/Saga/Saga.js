import {
    put,
    call,
    takeLatest
  } from "redux-saga/effects";
  import API from "../APIUrls";
  import API_CONST from "../APIConstants";
  import ACTION_TYPES from "../Actions/ActionTypes";
  import base64 from "react-native-base64"
  import CONST from '../Constants'

  
  
  // alert(JSON.stringify(commonData.getLoggedInUserInfo().token));
  
  //Call for fetching data from api
  const _apiCall = (url, data) => {
    return fetch(url, data)
      .then(res => {
        return { res: res, res_json: res.json() };
      })
      .catch(e => {
        throw e;
      });
  };
  
  //get response json
  const _extJSON = p => {
    return p.then(res => res);
  };



   storeData = async (val) => {

    try {
      await AsyncStorage.setItem("authorisation", val)
    } catch (e) {
      // saving error
    }
  }


  

  
  
  // API FOR LOGIN APP USER
  function* loginUser(action) {
    var postData = action.data;

    let username = postData.userName;
    let password = postData.password;

    console.log("======loginUser=========");
    console.log(API);
    console.log("postdata===" + JSON.stringify(postData));
    console.log("====================================");
    var accessToken = '';

    
    try {
var authorization = base64.encode(username + ":" + password)
     // var urlUserLogin = "http://" + username + ":" + password + "@" + API.USER_LOGIN
      var urlUserLogin = "https://" +  API.USER_LOGIN
     //'Authorization' : 'Basic ' + authorization ,
      let response = yield call(_apiCall, urlUserLogin, {
        method: "GET",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization' : 'Basic ' + authorization ,
        },
    });
      var responseJSON = yield call(_extJSON, response.res_json);
      var responseData = {
        data: responseJSON,
        headerResponse: response.res
      };
      console.log("**************************************************");
      console.log("Received headerResponse  API: ");
      console.log(JSON.stringify(responseData.headerResponse));
      console.log("Received data  API: ");
      console.log(JSON.stringify(responseData.data));
      console.log("**************************************************");
      yield put({
        type: ACTION_TYPES.LOGIN,
        payload: responseData
      });
    } catch (e) {
      console.log("Error: " + e);
      yield put({
        type: ACTION_TYPES.LOGIN,
        payload: e
      });
    }
  }
  
  function* getProviders(action) {
    var postData = action.data;

    // To Do PK
    let groupName = postData.groupName

    console.log(API);
    var accessToken = '';
    var urlGetProvider = "https://" + API.GET_PROVIDER + groupName;
    try {
      let response = yield call(_apiCall, urlGetProvider, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
      });
      var responseJSON = yield call(_extJSON, response.res_json);
      var responseData = {
        data: responseJSON,
        headerResponse: response.res
      };
     
      console.log("**************************************************");
      console.log(JSON.stringify(responseData.headerResponse));
      console.log("Received data *** Provider *** API: ");
      console.log(JSON.stringify(responseData.data));
      console.log("**************************************************");
      yield put({
        type: ACTION_TYPES.GET_PROVIDERS,
        payload: responseData
      });
    } catch (e) {
      console.log("Error: " + e);
      yield put({
        type: ACTION_TYPES.GET_PROVIDERS,
        payload: e
      });
    }
  }



  function* getVMSForProvider(action) {
    var postData = action.data;

    // To Do PK
    let emsId = postData.emsId

    console.log(API);
    var accessToken = '';
    var urlGetProvider = "https://" + API.GET_VMS_FOR_PROVIDER + emsId + "&expand=resources";
    var authorization = postData.authorisation;

    try {
      let response = yield call(_apiCall, urlGetProvider, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          "authorization" : "Basic " + authorization ,
        },
      });
      var responseJSON = yield call(_extJSON, response.res_json);
      var responseData = {
        data: responseJSON,
        headerResponse: response.res
      };
     
      console.log("**************************************************");
      console.log(JSON.stringify(responseData.headerResponse));
      console.log("Received data *** VMs *** API: ");
      console.log(JSON.stringify(responseData.data));
      console.log("**************************************************");
      yield put({
        type: ACTION_TYPES.GET_VMS_FOR_PROVIDER,
        payload: responseData
      });
    } catch (e) {
      console.log("Error: " + e);
      yield put({
        type: ACTION_TYPES.GET_VMS_FOR_PROVIDER,
        payload: e
      });
    }
  }

  function* getUserDetails(action) {
    var postData = action.data;
    let username = postData.userName;
    let password = postData.password;
    console.log("======loginUser=========");
    console.log(API);
    console.log("postdata===" + JSON.stringify(postData));
    console.log("====================================");
    var accessToken = '';
    var urlGetProvider = "https://" + API.GET_USER_DETAILS;
    var authorization = base64.encode(username + ":" + password)
    storeData(authorization)
    try {
      let response = yield call(_apiCall, urlGetProvider, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          "authorization" : "Basic " + authorization ,
        },
      });
      var responseJSON = yield call(_extJSON, response.res_json);
      var responseData = {
        data: responseJSON,
        headerResponse: response.res,
        authorization : authorization
      };
      console.log("**************************************************");
      console.log("Received headerResponse  API: ");
      console.log(JSON.stringify(responseData.headerResponse));
      console.log("Received data  API: ");
      console.log(JSON.stringify(responseData.data));
      console.log("**************************************************");
      yield put({
        type: ACTION_TYPES.GET_USER_DETAILS,
        payload: responseData
      });
    } catch (e) {
      console.log("Error: " + e);
      yield put({
        type: ACTION_TYPES.GET_USER_DETAILS,
        payload: e
      });
    }
  }
   
  function* getAllNotifications(action) {
    var postData = action.data;
   
    console.log("======GetAllNotifications=========");
    console.log(API);
    console.log("postdata===" + JSON.stringify(postData));
    console.log("====================================");
    var accessToken = '';
    var urlGetAllNotifications = API.GET_ALL_NOTIFICATIONS;
   
    try {
      let response = yield call(_apiCall, urlGetAllNotifications, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify(postData),
      });
      var responseJSON = yield call(_extJSON, response.res_json);
      var responseData = {
        data: responseJSON,
        headerResponse: response.res,
      };
      console.log("**************************************************");
      console.log("Received headerResponse  API: ");
      console.log(JSON.stringify(responseData.headerResponse));
      console.log("Received data  API: ");
      console.log(JSON.stringify(responseData.data));
      console.log("**************************************************");
      yield put({
        type: ACTION_TYPES.GET_ALL_NOTIFICATIONS,
        payload: responseData
      });
    } catch (e) {
      console.log("Error: " + e);
      yield put({
        type: ACTION_TYPES.GET_ALL_NOTIFICATIONS,
        payload: e
      });
    }
  }
  
  
  function* rootSaga() {
    
    yield takeLatest(API_CONST.N_USER_LOGIN, loginUser);

    yield takeLatest(API_CONST.N_GET_USER_DETAILS, getUserDetails);

    yield takeLatest(API_CONST.N_GET_PROVIDERS, getProviders);

    yield takeLatest(API_CONST.N_GET_VMS_FOR_PROVIDER, getVMSForProvider);

    yield takeLatest(API_CONST.N_GET_ALL_NOTIFICATIONS, getAllNotifications);
  }
  export default rootSaga;
  