import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import COLORS from "../Util/Theme/ColorConstants"


export default class Report extends Component {
   
    // static navigationOptions = {
      
    //     title: 'Notifications',
    //     headerTintColor: 'white',
    //     headerLeft: null,

    //     headerStyle: {
    //       backgroundColor: COLORS.darkBlue
          
    //     }
    //   };

    render() {
      return (
             <View style={styles.container} >
             
             </View>
      );
    }
  }


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.lightBlue,
      alignItems: 'center',
      flexDirection:'column',
    
    },
    
  });
  