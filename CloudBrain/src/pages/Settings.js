import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import COLORS from "../Util/Theme/ColorConstants"
import NavigationService from '../Util/Navigation/NavigationService';
import CONST from '../Util/Constants';
import AsyncStorage from '@react-native-community/async-storage';

export default class Settings extends Component {

  constructor(props) {
    super(props)
  }
   
  componentDidMount() {
    this.removeData()
    this.load()
    this.props.navigation.addListener('willFocus', this.load)
  }
  
  load = () => {
    NavigationService.navigate('login')
  }

 
  static storeData = async () => {

    try {
      await AsyncStorage.setItem(CONST.k_auth, "")
    } catch (e) {
      // saving error
    }
  }
  

  removeData = async () =>  {

    storeData()
  }

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
  