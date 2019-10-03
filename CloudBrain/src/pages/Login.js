import React, {Component} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Logo from '../components/Logo'
import Form from '../components/Form'

import COLORS from '../Util/Theme/ColorConstants'

const window = Dimensions.get('window');

export default class Login extends Component {
   

  static navigationOptions = {
    
    header: null,
    
  };

  constructor() {
    super();
    this.state = {
      
    };
  }
    self = this;
   
  
    render() {
      return (
             <View style={styles.container} >
             <Logo></Logo>
             <Form></Form>
             </View>
      );
    }
  }


  
const styles = StyleSheet.create({
    container: {
      //flex: 1,
      backgroundColor:'white',
      alignItems: 'center',
      flexDirection:'column',
      height : window.height,
      width : window.width

    },

   
    
  });
  