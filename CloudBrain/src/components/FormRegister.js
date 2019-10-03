import React, {Component} from 'react';
import {View, StyleSheet,TouchableOpacity,Text} from 'react-native';
export default class FormRegister extends Component {


    onPress = () => {
        this.setState({
          count: this.state.count+1
        
        })
       
        
      }
   
    render() {
         
        return (
        <View style={styles.container}>
           
        <TouchableOpacity style={styles.button} 
         onPress={this.onPress}>
        
        <Text style={styles.buttonText}> Register</Text>
        </TouchableOpacity>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        borderRadius:10,
        backgroundColor:'white',
        width: 290,
        height:50,
    //     shadowColor: '#000',
    //     shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.8,
    // shadowRadius: 0,
    // elevation: 1,
    
      
    },
    
    button:{

        alignItems:'center',
        width: 220,
    },
    buttonText:{
        color:'#F5FCFF',
        width: 120,
        fontSize:16,
        textAlign:'center',
        paddingVertical:15


    }
  });