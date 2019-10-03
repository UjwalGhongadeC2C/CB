import React, {Component} from 'react';
import {View, StyleSheet,TextInput,TouchableOpacity,Text,KeyboardAvoidingView,
    AsyncStorage} from 'react-native';
// import {BASE_URL,
//     VERIFY_USER
// } from '../Util/Constants';

export default class FormSignup extends Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 }
      }

      postWithHeader (url)  {
        //let username = email.toLowerCase().trim();
        const URL = url;
        var accessToken = '';
        fetch(URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Source':'iOS',
        'X-Version':234,
        'Authorization':accessToken
      },
    //   body: JSON.stringify({
    //     firstParam: 'yourValue',
    //     secondParam: 'yourOtherValue',
    //   }),
    }).then(function(response) {
        //return response.json();
      }).then(function(data) {
          if (data.data != null){
        AsyncStorage.setItem(data.data.accessToken, 'access_token_verify');
          }
      });
    
        
    }

    onPress = () => {
        this.setState({
          count: this.state.count+1
        
        })
        ID = this.state.ID
        email = this.state.email
        firstname = this.state.firstname
        lastname = this.state.lastname
         
        
      }
   
    render() {
        return (
            <KeyboardAvoidingView 
            style={styles.keyboardViewContainer} 
            behavior='position'
             enabled={true} >
        <View style={styles.container}>
            <Text style={styles.labelText}> Register </Text>
            <TextInput
             style={styles.inputBox}
             // onChangeText={(text) => this.setState({text})}
             // value={this.state.text}
             placeholder="ID"
             placeholderTextColor='gray'
             ref= {(el) => { this.ID = el; }}
             onChangeText={(username) => this.setState({ID})}
             value={this.state.ID}
            />

            <TextInput
             style={styles.inputBox}
             // onChangeText={(text) => this.setState({text})}
             // value={this.state.text}
             placeholder="First Name"
             placeholderTextColor='gray'
             ref= {(el) => { this.firstname = el; }}
             onChangeText={(firstname) => this.setState({firstname})}
             value={this.state.firstname}
            />

            <TextInput
             style={styles.inputBox}
             // onChangeText={(text) => this.setState({text})}
             // value={this.state.text}
             placeholder="Last Name"
             placeholderTextColor='gray'
             ref= {(el) => { this.lastname = el; }}
             onChangeText={(lastname) => this.setState({lastName})}
             value={this.state.lastname}
            />

            <TextInput
             style={styles.inputBox}
             // onChangeText={(text) => this.setState({text})}
             // value={this.state.text}
             placeholder="Email"
             placeholderTextColor='gray'
             ref= {(el) => { this.email = el; }}
             onChangeText={(email) => this.setState({email})}
             value={this.state.email}
            />



        <TouchableOpacity style={styles.buttonLogin}  
        backgroundColor='gray' 
        onPress={this.onPress}>
        
        <Text style={styles.buttonText}> Register </Text>
        </TouchableOpacity>

       
          </View>
          </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({


    keyboardViewContainer: {
      
        alignItems: 'center',
        borderRadius:10,
        alignItems: 'center',
        marginVertical:-3,
        paddingVertical:0,
        width: 320,
        height:250,
          zIndex:2
      },
    container: {
      
      backgroundColor: '#F5FCFF',
      alignItems: 'center',
      borderRadius:10,
      marginVertical:-3,
      paddingVertical:70,
      width: 320,
      height:250,
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
        backgroundColor : 'white',
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
        
        backgroundColor : '#F5FCFF',
        marginVertical: 15,
        borderRadius:20,
        color:'white',
        alignItems:'center',
        width: 280
    },
    buttonForgot:{
        paddingVertical: 0,
        
        color:'#F5FCFF',
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
        
        color:'#F5FCFF',
        textAlign:'center',
        width: 260,
        
        

    },
    labelText:{
        marginTop:-40,
        width:270,
        color:'black',
        fontSize:20,
        textAlign:'left',

    }
  });