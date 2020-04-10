import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import Login from './src/Components/Login'
import HomeScreen from './src/Components/Home/Homescreen'

const Stack = createStackNavigator();

function SplashScreen() {
  return (
    <View style={styles.container}>
      <Text>Splash Screen</Text>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
    </View>
  );
}

class App extends React.Component {
  constructor(){
    super()
    this.state ={
      isLoading: true,
      userToken: null,
    }
    this._logout = this._logout.bind(this)
    this._login = this._login.bind(this)
  }

  componentDidMount(){
    AsyncStorage.getItem('isLoggedIn')
    .then(val => {
      this.setState({isLoading: false})
      if (val === 'true'){
        this.setState({
          userToken: val,
        })
      } else {
        console.log('Got value from async sotrage but it doesnt match: ', val)
        // means theyre not logged in, or value doesnt exist
      }
    })
    .catch(err => {
      alert('could not get item from async storage')
    })
  }

  _login(userToken){
    this.setState({
      userToken: userToken
    })
  }

  _logout(){
    this.setState({
      userToken: null
    })
  }

  render(){
    if (this.state.isLoading) {
      return <SplashScreen />;
    } else {
      if (this.state.userToken === null){
        return (
          <NavigationContainer >
            <Stack.Navigator headerMode='none'>
              <Stack.Screen name="Login">
                  {() => <Login login={this._login} />} 
              </Stack.Screen>
              {/* should add screens for new users or forgotten pass here? or can make it single page app */}
            </Stack.Navigator>
          </NavigationContainer>
        )
      } else {
        return (
          <NavigationContainer>
            <Stack.Navigator headerMode='none'>
              <Stack.Screen name="Home">
                  {() => <HomeScreen logout={this._logout} />}
              </Stack.Screen>
              
              <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>

          </NavigationContainer>
        )
      }
    }
  }
};

// and idk why i had to add flex: 1 for it to cover the whole page, is there already a flexbox implemented?
// i guess i actually dont know how the css is working on this app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
