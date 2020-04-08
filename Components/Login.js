import React, { Component, useState } from 'react';
import {Picker, Text, StyleSheet, View, TextInput, Button, AsyncStorage} from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
    }
    this.handleNewUser = this.handleNewUser.bind(this)
    this.handleNoPass = this.handleNoPass.bind(this)
    this._userInfo = {
      name: 'admin',
      pass: 'test1234'
    }
  }

  // Bypasses below issue for now: 
// also was not able to make a handle change func becasue event.target kept being undefined
// https://stackoverflow.com/questions/38651770/how-can-i-get-real-elment-by-node-id-react-native
// find node handle might be a good appraoch
// https://reactnative.dev/docs/direct-manipulation
// https://reactnative.dev/docs/handling-touches


  handleNoPass(){
    AsyncStorage.setItem('test', 'TUREEE', () => {
      AsyncStorage.getAllKeys((data) => {
        console.log('what i just added', data)
      })
    })
    
    alert('Well too bad.')
  }

  handleNewUser(){
    alert('Sorry, not accepting new users. Try again later.')
  }

  _login = async({navigation}) => {
    if (this.state.email === this._userInfo.name && this.state.password === this._userInfo.pass){
      await AsyncStorage.setItem('isLoggedIn', 'true')
      this.props.func(true)
    } else {
      alert('Incorrect password or email!')
    }
  }

  render() {
    return (
      <View style={styles.outerContainer}>
        <Text style={styles.logo}>Groak!</Text>
        <Text style={{fontFamily: 'Bodoni 72'}}>Let us find food for you</Text>
        <View style={styles.login}>
          <View style = {styles.innerContainer}>
            <TextInput 
              placeholder="Email"
              style = {styles.input}
              value = {this.state.email}
              onChangeText = {text => {this.setState({'email': text})}}
              autoCapitalize = "none"
              />
            <TextInput
              secureTextEntry={true}
              placeholder="Password"
              style = {styles.input}
              onChangeText = {text => {this.setState({'password': text})}}
              autoCapitalize = "none"
            />
            <View style={styles.button}>
              <Button 
                title='Login' 
                color= '#fff'
                // onPress={this.onPress}
                onPress={this._login.bind(this,this.props)}
                name = "login"
                // tried textStyle and fontFamily and was not able to change font of button so it looks weird
              />
            </View>
            <Text style={styles.text} name="forgotPass" onPress={this.handleNoPass}> Don't remember your password? </Text>
            <Text style={styles.text} name="newAccount" onPress={this.handleNewUser}> Create a new account! </Text>
          </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  outerContainer:{
    backgroundColor: '#e9967a',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8fbc8f'
  },
  logo: {
    fontSize: 30,
    fontWeight: '600',
    fontFamily: 'Bodoni 72'
  },
  login: {
    backgroundColor: '#5f9ea0',
    width: '80%',
    borderRadius: 10,
    alignItems: 'center',
  },
  innerContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 'auto',
    padding: 20
  },
  input: {
    width: 300,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 3,
    fontSize: 23,
    fontFamily: 'Bodoni 72'
  },
  text: {
    marginTop: 5,
    textDecorationLine: "underline",
    fontFamily: 'Bodoni 72'
  },
  button: {
    backgroundColor: '#2f4f4f',
    borderRadius: 4,
    margin: 10,
  },
});