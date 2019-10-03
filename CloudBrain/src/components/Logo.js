import React, {Component} from 'react';
import {View, StyleSheet,Image} from 'react-native';

export default class Logo extends Component {
   
    render() {
        return (
        <View style={styles.container}>
            <Image style={styles.imageStyle}
                source={require('../resources/Images/CloudbrainLogo.png')}/>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor:'transparent',
      alignItems: 'center',
      marginVertical:20,
    },
     imageStyle : {
        width: 198,
        height: 100,
        resizeMode: 'contain'
     },
     textStyle : {
        fontSize: 20,
    }
  });