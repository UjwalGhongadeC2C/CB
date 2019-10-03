import React, {Component} from 'react';
import Login from '../../pages/Login';


import DrawerNavigator from './DrawerNavigationUtils/DrawerNavigator';


import {
  
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';



const AppSwitchNavigator = createSwitchNavigator({
  login: Login,
  drawer: DrawerNavigator,
  
},
{
 
  initialRouteName: 'login'
}
);
  
const AppSwitchNavigatorLoggedIn = createSwitchNavigator({
  login: Login,
  drawer: DrawerNavigator,
  
},
{
  
  initialRouteName: 'drawer'
}
);
  
  
export const Container = createAppContainer(AppSwitchNavigator);
export const DashboardContainer = createAppContainer(AppSwitchNavigatorLoggedIn);
  