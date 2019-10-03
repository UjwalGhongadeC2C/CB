import React, {Component} from 'react';

import {View,
   StyleSheet,
   TextInput,
   TouchableOpacity,
   Text,
   KeyboardAvoidingView,
   Alert,
   ActivityIndicator } from 'react-native';

    import AsyncStorage from '@react-native-community/async-storage';

    import netInfo from "@react-native-community/netinfo";
  
    import NavigationService from '../Util/Navigation/NavigationService';

    import CONST from '../Util/Constants';

    
    import COLORS from '../Util/Theme/ColorConstants'
  
import { connect } from "react-redux";

import ACTION_TYPES from '../Util/Actions/ActionTypes'

import {
  getUserDetails,
  loginUser,
  getProviders
} from '../Util/Actions/ActionsCreators';





export default class Form extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
          isNetworkConnected: false,
          errorMsg: "",
          errorOnTextField: "",
          accessToken: "",
          isLoginSuccessfull: false,
          isActivityLoading: false,
          prevProp:null,
          currentActionType: "",
          //groupName: "",
          //realm: null,
          }
      }

     static storeGroupName = async (groupName) => {

        try {
          await AsyncStorage.setItem(CONST.k_groupName, groupName)
        } catch (e) {
          // saving error
        }
      }

      


      static storeUserData = async (userData) => {
        try {
          await AsyncStorage.setItem(CONST.k_userData, userData)
        } catch (e) {
          // saving error
        }
      }

      static storeDataAuth = async (auth) => {

        try {
          await AsyncStorage.setItem(CONST.k_auth, auth)
        } catch (e) {
          // saving error
        }
      }
      
      validateInputs() {

        if (this.state.signInUsername == "" || this.state.signInUsername == undefined){
          return false
        }
        else if (this.state.signInPassword == "" || this.state.signInPassword == undefined){
          return false
        }
        return true
      }

     

      onPressLogin = () => {

      if (this.validateInputs() == false){
        Alert.alert("Please Enter Valid Username / Password!")
        return
      }

      if (this.state.isNetworkConnected == true){
        
        
     // this.startActivityIndicator()
     this.setState({
                    isActivityLoading: true,
                    currentActionType : ACTION_TYPES.LOGIN
                  });

      var postData = {
        // Req. Params body ======= imp =======
        userName : this.state.signInUsername,
        password : this.state.signInPassword
      };
     
      
     
      this.props.loginUser(postData)
    }
    else{
      Alert.alert("Please check your Internet Connection!")
    }
      }

      static getDerivedStateFromProps(props, state) {

        if (state.prevProp == props || state.currentActionType == ""){
                  return{
                    prevProp : props,
                   } 
                }
                else {
                  if (state.currentActionType == ACTION_TYPES.LOGIN &&  props.userLoginResponse != null ){
        
                    if (props.userLoginResponse.headerResponse != null && props.userLoginResponse.headerResponse.status == 200) 
                      {
        
                        var postData = {
                          // Req. Params body
                          userName : state.signInUsername,
                          password : state.signInPassword
                          
                        };
                       
                        props.getUserDetails(postData)
                        return {
                          prevProp : props,
                          currentActionType :  ACTION_TYPES.GET_USER_DETAILS
                        }
                
                        }
                        else if (props.userLoginResponse.headerResponse == null) {
                          return{
                            
                            
                            prevProp : props,
                            currentActionType : ""
                           } 
                        }
                        else {

                        
                        if (props.userLoginResponse.headerResponse.status == 400) {
                                  Alert.alert(props.userLoginResponse.data.error.message);
                                } else if (props.userLoginResponse.headerResponse.status == 401) {
                                  Alert.alert(props.userLoginResponse.data.error.message);
                                } else if (props.userLoginResponse.headerResponse.status == 500) {
                                  Alert.alert("Internal Server Error");
                                }
                                else if (props.userLoginResponse.headerResponse.status == 404) {
                                  //pk chngs
                                  Alert.alert("User not found")
                                } 
                                
                                return{
                                  isActivityLoading: false,
                                  prevProp : props,
                                  currentActionType : ""
                                 } 
                              }      
        
        
                 
                           }
                           else if (state.currentActionType == ACTION_TYPES.GET_USER_DETAILS && props.userDetailsResponse != null)
                           {
        
                            if (props.userDetailsResponse.headerResponse != null && props.userDetailsResponse.headerResponse.status == 200) 
                            {
                                                                                 

                              //setState({ groupName :  props.userDetailsResponse.data.identity.group});
                              //Store in async storage -------------

                             Form.storeGroupName(props.userDetailsResponse.data.identity.group)
                             Form.storeUserData(props.userDetailsResponse.data.identity)
                             Form.storeDataAuth(props.userDetailsResponse.authorization)
                             //Form.storeUserData(props.userDetailsResponse.data.identity.name + '+' + props.userDetailsResponse.data.identity.role)

                            var userData = {
                               name : props.userDetailsResponse.data.identity.name,
                               role : props.userDetailsResponse.data.identity.role
                            }

                            
                             
                              //3. Navigate - working *******
                              NavigationService.navigate('drawer',props.userDetailsResponse.data.identity);
                            

                              return {
                                isNetworkConnected: true,
                                errorMsg: "",
                                errorOnTextField: "",
                                accessToken: props.userLoginResponse.data.accessToken,
                                isLoginSuccessfull: true,
                                isActivityLoading: false,
                                prevProp : props,
                                currentActionType : ""
                              }
                      
                              }
                              else if (props.userLoginResponse.headerResponse == null) {

                                
                                return{
                                  
                                  prevProp : props,
                                  currentActionType : ""
                                 } 
                              }
                              else {
                                
                              if (props.userLoginResponse.headerResponse.status == 400) {
                                        Alert.alert(props.userLoginResponse.data.error.message);
                                      } else if (props.userLoginResponse.headerResponse.status == 401) {
                                        Alert.alert(props.userLoginResponse.data.error.message);
                                      } else if (props.userLoginResponse.headerResponse.status == 500) {
                                        Alert.alert("Internal Server Error");
                                      }
                                      else if (props.userLoginResponse.headerResponse.status == 404) {
                                        //pk chngs
                                        Alert.alert("User not found")
                                      } 
                                      
                                      return{
                                        isActivityLoading: false,
                                        prevProp : props,
                                        currentActionType : ""
                                       } 
                                    }      
              
        
                           }
                          }
                
        return null
              }
      
   

      closeActivityIndicator = ()  => this.setState({
        isActivityLoading: false })

      startActivityIndicator = () => this.setState({
          isActivityLoading: true })
      
    
      componentDidMount() {

        netInfo.fetch().then(state => {
        
          this.setState({isNetworkConnected : state.isConnected})
      });

     
     

      };

     

    render() {
        return (
          
            <KeyboardAvoidingView 
            style={styles.keyboardViewContainer} 
            behavior='padding'
             enabled={true}
             keyboardVerticalOffset={20}>
         
         <View style={styles.container}> 
       
           <ActivityIndicator
               animating = {true}
               color = {COLORS.appBlueTheme}
               size = "large"
               style={{opacity: this.state.isActivityLoading ? 1.0 : 0.0, flex: 1,
                height: 80,
               position: 'absolute',
               left: 0,
               right: 0,
               top: 0,
               bottom: 0,
               alignItems: 'center',
              justifyContent: 'center',}}
               hidesWhenStopped = {true}
               />

            <Text style={styles.labelText}> Sign In </Text>
            <TextInput
             style={styles.inputBox}
             // onChangeText={(text) => this.setState({text})}
             // value={this.state.text}
             placeholder="Please enter your user Id"
             placeholderTextColor='gray'
             keyboardShouldPersistTaps={true}
             ref= {(el) => { this.signInUsername = el; }}
             onChangeText={(signInUsername) => this.setState({signInUsername})}
             value={this.state.signInUsername}
            />

            <TextInput
             style={styles.inputBox}
             // onChangeText={(text) => this.setState({text})}
             // value={this.state.text}
             placeholder="Please enter your password"
             placeholderTextColor='gray'
             keyboardShouldPersistTaps={true}
             ref= {(el) => { this.signInPassword = el; }}
             onChangeText={(signInPassword) => this.setState({signInPassword})}
             value={this.state.signInPassword}
             secureTextEntry={true}
            />



        <TouchableOpacity style={styles.buttonLogin}  
        backgroundColor='gray' 
        onPress={this.onPressLogin.bind(this)}>
        
        <Text style={styles.buttonText}> Sign In </Text>
        </TouchableOpacity>
          </View> 
          </KeyboardAvoidingView>

         
        )
    }
}


const mapStateToProps = ({ loginReducer }) => {
  const {
    userLoginResponse,
    userDetailsResponse,
    providerResp
  } = loginReducer;

  return {
    userLoginResponse: userLoginResponse,
    userDetailsResponse : userDetailsResponse,
    providerResp : providerResp
  };
};

module.exports = connect(
  mapStateToProps,
  {
    loginUser,
    getUserDetails,  
    getProviders
  }
)(Form);



const styles = StyleSheet.create({


    keyboardViewContainer: {
      
        alignItems: 'center',
        borderRadius:10,
        paddingVertical:0,
        width: 320,
        height:300,
        zIndex:2,
        

      },
    container: {
      
      backgroundColor: '#F5FCFF',
      alignItems: 'center',
      borderRadius:10,
      //paddingVertical:30,
      width: 320,
      height:290,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 1,
        zIndex:2
    },
    inputBox:{
        width:300,
        height:40,
        backgroundColor : 'transparent',
        marginVertical: 15,
        paddingHorizontal:18,
        borderRadius:20,
        fontSize:16,
        borderWidth: 0,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 1,
    },
    buttonLogin:{
        
        backgroundColor :  COLORS.appBlueTheme,
        marginVertical: 15,
        borderRadius:20,
        color:'white',
        alignItems:'center',
        width: 280
    },
    buttonForgot:{
        paddingVertical: 0,
        
        color: COLORS.appBlueTheme,
        alignItems:'center',
        width: 260,
    },
    buttonText:{
        
        marginVertical: 15,
        borderRadius:20,
        color:'white',
        width: 120,
        fontSize:16,
        textAlign:'center',
        

    },
    buttonTextForgot:{
        
        paddingVertical: 5,
        
        color:COLORS.appBlueTheme,
        textAlign:'center',
        width: 260,
    },
    labelText:{
        marginTop:20,
        width:270,
        color:'black',
        fontSize:20,
        textAlign:'left',

    },
    activityIndicator: {
      flex: 1,
      height: 80,
     position: 'absolute',
     left: 0,
     right: 0,
     top: 0,
     bottom: 0,
     alignItems: 'center',
    justifyContent: 'center',
    
      
   }
  });