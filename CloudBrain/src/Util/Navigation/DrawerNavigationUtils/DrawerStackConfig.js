
import React, {Component} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {DrawerActions} from 'react-navigation';


//1. import createStackNavigator
import { createStackNavigator } from "react-navigation";

import COLORS from '../../../Util/Theme/ColorConstants';


//2. import All screens

import Dashboard from '../../../pages/Dashboard';
import ProviderDetails from '../../../pages/ProviderDetails';
import Compare from '../../../pages/Compare';
import Migration from '../../../pages/Migration';
import BudgetManagement from '../../../pages/BudgetManagement';
import CostManagement from '../../../pages/CostManagement';
import Subscription from '../../../pages/Subscription';
import Settings from '../../../pages/Settings';
import MigrationDetails from '../../../pages/MigrationDetails';


//3. ======================================Create Constants of all screens===========================================


// const Dashboard_RouteConfig = {
//     dashboardObj: Dashboard, 
//     providerDetailsObj: ProviderDetails,
    
// };

const Dashboard_RouteConfig = {
    DashboardObj: {screen: Dashboard},
    providerDetailsObj: {
        screen: ProviderDetails,
    }
};



const Compare_RouteConfig = {
    compareObj: Compare,  
};

const Migration_RouteConfig = {
    
    //migrationObj: {screen: (props) => <Migration screenProps = {(props)} />},
    //migrationObj: {screen: (props) => <Migration {...props}/>},
    migrationObj: {screen: Migration},
    migrationDetailObj: {screen: MigrationDetails}
};

const BudgetManagement_RouteConfig = {
    budgetManagementObj: BudgetManagement,
    
};

const CostManagement_RouteConfig = {
    costManagementObj: CostManagement,
    
};


const Subscription_RouteConfig = {
    subscriptionsObj: Subscription,
    
};

const Setting_RouteConfig = {
    settingObj: Settings,
    
};



//4. ======================================Create stack using constants of screens====================================
const StackNavigatorConfig = {

    defaultNavigationOptions: ({navigation}) => ({

        //Set header configuration
        headerTitleStyle :{color:COLORS.lightBlue},
        headerStyle: {backgroundColor:COLORS.appBlueTheme},
    
        gesturesEnabled: false,
         headerLeft: (

        <TouchableOpacity  onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
             <Image
               source={require('../../../resources/Images/drawer.png')}
               style={{ width: 28, height: 30, marginLeft: 5 }}
             />
        </TouchableOpacity>
             )

       
      })

};



//4. ======================================Create Stacknavigator of screens====================================

export const DashboardStackNavigator = createStackNavigator(Dashboard_RouteConfig, StackNavigatorConfig);
export const CompareStackNavigator = createStackNavigator(Compare_RouteConfig, StackNavigatorConfig);
export const MigrationStackNavigator = createStackNavigator(Migration_RouteConfig, StackNavigatorConfig);
export const BudgetManagementStackNavigator = createStackNavigator(BudgetManagement_RouteConfig, StackNavigatorConfig);
export const CostManagementStackNavigator = createStackNavigator(CostManagement_RouteConfig, StackNavigatorConfig);
export const SubscriptionStackNavigator = createStackNavigator(Subscription_RouteConfig, StackNavigatorConfig);
export const SettingStackNavigator = createStackNavigator(Setting_RouteConfig, StackNavigatorConfig);




