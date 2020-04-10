import 'react-native-gesture-handler';
import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';



function HomeScreen({logout}) {
    const navigation = useNavigation();
    let signout = () => {
      AsyncStorage.clear()
      .then(() => {
        logout()
      })
      .catch(err => {
        alert('unable to logout')
      })
    }
    return (
      <View style={styles.container}>
        {/* <Header></Header> */}
        <Text>Home Screen</Text>
        <Button
          title="Find More Details"
          onPress = {() => {navigation.navigate('Details')}}
        />
        <Button
          title='Logout'
          onPress = {signout}
        />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#e9967a',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#8fbc8f'
    },
  });


export default HomeScreen;