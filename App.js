import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './Components/Header'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  ActivityIndicator,
  AsyncStorage,
} from 'react-native';


import Login from './Components/Login'

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

  function HomeScreen({navigation}) {
    return (
      <View style={styles.container}>
        {/* <Header></Header> */}
        <Text>Home Screen</Text>
        <Button
          title="Find More Details"
          onPress = {() => {navigation.navigate('Details')}}
        />
      </View>
    );
  }
  
  class AuthLoadingScreen extends React.Component {
    constructor(props){
      super(props)
      this._loadData()
    }

    _loadData = async() => {
      const isLoggedIn = await AsyncStorage.getItem('isLoggedIn')
    }

    render(){
      return(
        <View style={styles.container}>
          <ActivityIndicator/>
          <StatusBar barStyle='default'/>
        </View>
      )
    }
  }

class App extends React.Component {
  constructor(){
    super()
    this.state ={
      isLoading: true,
      userToken:null
    }
    this.AuthLoadingScreen = this.AuthLoadingScreen.bind(this)
  }

  componentDidMount(){
    // find if user is logged in or not, and if he is, then move to next screen or not
    


    AsyncStorage.getItem('test', (isLoggedIn) => {
      AsyncStorage.getAllKeys((data) => {
        console.log('inside async', data)
      })
      // console.log('when starting up I check async storage', isLoggedIn)
      this.setState({
        userToken: isLoggedIn,
        isLoading: false
      })
    })
  }

  AuthLoadingScreen(userToken){
    this.setState({
      userToken: userToken
    })
  }

  render(){
    if (this.state.isLoading) {
      return <SplashScreen />;
    } else {
      if (this.state.userToken === null){
        return (
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Login" >
                  {() => <Login func={this.AuthLoadingScreen} />} 
              </Stack.Screen>
              {/* should add screens for new users or forgotten pass here? or can make it single page app */}
            </Stack.Navigator>
          </NavigationContainer>
        )
      } else {
        return (
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>

          </NavigationContainer>
        )
      }
    }

  }
};

// maybe later down the line add a splash screen here

// and idk why i had to add flex: 1 for it to cover the whole page, is there already a flexbox implemented?
// i guess i actually dont know how the css is working on this app

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e9967a',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8fbc8f'
  },
});

export default App;
