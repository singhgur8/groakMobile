import React, { Component, useState } from 'react';
import {Picker, Text, StyleSheet, View, TextInput, Button} from 'react-native';

export default class Main extends Component {
  render() {
    return (
      <View >
        <Text > User Login </Text>
        <View>
          <TextInput 
            placeholder="Email" />
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  //Check project repo for styles
  // flex: 1, justifyContent: "center", alignItems: "center" 
});



// CREATE A PLAN FOR THE APP

// About section, and then have a login button that when its clicked the the pop up shows

// WHEN YOU OPEN THE APP, there will be alogo at the top, and then just a big login form?
// kind of like a banking app...?


// once you log in, then it will go to the main page so i need to Conditional render
// this page will be the main selection page where I can choose what I want to do