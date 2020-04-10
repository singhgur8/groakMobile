import 'react-native-gesture-handler';
import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavBar from '../NavBar';



function HomeScreen({logout}) {
    const navigation = useNavigation();
    return (
      <View style={{flex:1}}>
        <View style={styles.navbar}>
          <NavBar navigation={navigation} logout={logout}/>
        </View>
        {/* <Header></Header> */}
        <View style={styles.container}>
          <Text>Home Screen</Text>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#8fbc8f',
    },
    navbar: {
      position: 'absolute',
      flex: 1,
      top: 25,
      left: 25,
      zIndex: 1,
    }
  });


export default HomeScreen;