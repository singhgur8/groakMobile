import React, { Component, useState } from 'react';
import {Picker, Text, StyleSheet, View, TextInput, Button} from 'react-native';

export default class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: "",
      password: "",
    }
    this.onPress = this.onPress.bind(this)
    this.handleNewUser = this.handleNewUser.bind(this)
    this.handleNoPass = this.handleNoPass.bind(this)
  }

  // Bypasses below issue for now: 
// also was not able to make a handle change func becasue event.target kept being undefined
// https://stackoverflow.com/questions/38651770/how-can-i-get-real-elment-by-node-id-react-native
// find node handle might be a good appraoch
// https://reactnative.dev/docs/direct-manipulation
// https://reactnative.dev/docs/handling-touches


  onPress(e){
    // console.log(elem)
    // this will submit what is in the forms
    // this should then authenticate with the server side
    // depending on whether the response is good or not, I should have a 
    // conditional render saying invalid login --- for now however just have the login always work!!
    // this means it should be held in its parents, or it could just do a callback to parents change screen function
    console.log(this.state.email, this.state.password)
  }

  handleNoPass(){
    alert('Well too bad.')
  }

  handleNewUser(){
    alert('Sorry, not accepting new users. Try again later.')
  }

  render() {
    return (
      <View style = {styles.container}>
        <TextInput 
          placeholder="Email"
          style = {styles.input}
          value = {this.state.email}
          onChangeText = {text => {this.setState({'email': text})}}
          />
        <TextInput
          secureTextEntry={true}
          placeholder="Password"
          style = {styles.input}
          onChangeText = {text => {this.setState({'password': text})}}
        />
        <View style={styles.button}>
          <Button 
            title='Login' 
            color= '#fff'
            onPress={this.onPress}
            name = "login"
            // tried textStyle and fontFamily and was not able to change font of button so it looks weird
          />
        </View>
        <Text style={styles.text} name="forgotPass" onPress={this.handleNoPass}> Don't remember your password? </Text>
        <Text style={styles.text} name="newAccount" onPress={this.handleNewUser}> Create a new account! </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
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



// CREATE A PLAN FOR THE APP

// About section, and then have a login button that when its clicked the the pop up shows

// WHEN YOU OPEN THE APP, there will be alogo at the top, and then just a big login form?
// kind of like a banking app...?


// once you log in, then it will go to the main page so i need to Conditional render
// this page will be the main selection page where I can choose what I want to do