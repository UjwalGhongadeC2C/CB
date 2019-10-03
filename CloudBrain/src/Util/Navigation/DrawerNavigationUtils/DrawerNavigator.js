import React, {Component} from 'react';
import { ScrollView, View, Image, TouchableOpacity, Text } from 'react-native';



//Imports for Navigation-Drawer
import {
    createDrawerNavigator, DrawerItems, NavigationDrawerScreenOptions  
} from 'react-navigation';

import DRAWER_STYLES from '../../../GlobalStylesheet/DrawerStyleConstants';

import COLORS from '../../Theme/ColorConstants';

import CONST from '../../Constants';


//===========================import All Stacknavigator of all screens===========================
import {DashboardStackNavigator, 
        CompareStackNavigator,
        MigrationStackNavigator,
        BudgetManagementStackNavigator,
        CostManagementStackNavigator,
        SubscriptionStackNavigator,
        SettingStackNavigator} from './DrawerStackConfig';
import { Content } from 'native-base';



//===========================configure DrawerMenu===========================


const DrawerMenu = (props) => (

  <View style = {DRAWER_STYLES.headerContainer}>
 
    <View style = {DRAWER_STYLES.headerView}>
    <View style = {DRAWER_STYLES.headerInnerViews}>
      <Image style = {DRAWER_STYLES.profilePicImg}
             source={require('../../../resources/Images/CloudBrainDrawer.png')}>
      </Image>
    </View>
      <View style = {DRAWER_STYLES.headerInnerViews}>
      <Text style = {DRAWER_STYLES.userNameText}>{props.navigation.state.params.name}</Text>
      <Text style = {DRAWER_STYLES.userRoleText}>{props.navigation.state.params.role}</Text>

      {/* <Text style = {DRAWER_STYLES.userNameText}>abc</Text>
      <Text style = {DRAWER_STYLES.userRoleText}>def</Text> */}
    
    </View>
    </View>
 
  <View style = {DRAWER_STYLES.bottomLine}></View>
    <ScrollView style = {DRAWER_STYLES.drawerScroll}>
      {/* <DrawerItems {...props} /> */}
      <DrawerItems {...props}/>
    </ScrollView> 
  </View>
  ) 
 

const allScreenStack = {

    Dashboard: DashboardStackNavigator,
    //Compare: CompareStackNavigator,
    // Migration: <MigrationStackNavigator screenProps={...props} />,
    Migration: MigrationStackNavigator,
    //BudgetManagement: BudgetManagementStackNavigator,
    'Cost Manager': CostManagementStackNavigator,
    //Subscription: SubscriptionStackNavigator,
    'Logout': SettingStackNavigator
}




const drawerConfiguration = {
  initialRouteName: 'Dashboard',
  
  drawerWidth: 300,
  drawerPosition: 'left',
  contentComponent: DrawerMenu,
  drawerBackgroundColor: 'white',
  contentOptions: {
      labelStyle: {
        color: COLORS.DrawerText,
        activeTintColor: COLORS.skyBlue,
      },
    },   
}


//===========================Create Drawer Navigator===========================

const DrawerNavigator = createDrawerNavigator(allScreenStack,drawerConfiguration); 

// const DrawerNavigator = createDrawerNavigator(
//   { ({navigation}) => <allScreenStack screenProps={{drawerNavigation:navigation}}/> },
//   drawerConfiguration); 

export default DrawerNavigator;

