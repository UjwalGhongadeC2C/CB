/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
/*

 var value = this.getUserId();
        if(value !== null) {
        return (
          <Provider store={store}>
                  <DashboardContainer  ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
             
          }}/>
         
          </Provider>
          
        );
        }
        else{
          return (
            <Provider store={store}>
                   <Container  ref={navigatorRef => {
              NavigationService.setTopLevelNavigator(navigatorRef);
               
            }}/>
           
            </Provider>
            
          );
        }
        
*/

 
import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import Login from './src/pages/Login';
import { Provider } from 'react-redux';
import MainStore from './src/Util/Store/MainStore'
import {Container, DashboardContainer} from './src/Util/Navigation/MainNavigator'
import NavigationService from './src/Util/Navigation/NavigationService';

import AsyncStorage from '@react-native-community/async-storage';

 


const store = MainStore()

//To do Pd
export default class App extends Component {

  
   getUserId = async () => {
    var userId = '', collect;
    try {
      userId = await AsyncStorage.getItem('auth').then(
        (userIds) => {
          collect= userIds;
          console.log('Then: ',collect);
        });
    } catch (error) {
      // Error retrieving data
      console.log(error.message);
    }
    return collect;
  }

  render() {
    
    return (
      <Provider store={store}>
             <Container  ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
         
      }}/>
     
      </Provider>
      
    );  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});



