import 'react-native-gesture-handler';
import React from 'react';
import {View, Button, Text, StyleSheet } from 'react-native'
import NavBar from '../NavBar';
import Colors from '../../tools/Colors';



// React's default picker is really lousey, its kind of a modal that shows whicch lets you scroll throught things
// then i would still have to select something. just see if there is already built drop down menus
// if not, then i will have to create my own

class HomeScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render(){
    let {logout} = this.props
    return(
      <View style={{flex:1}}>
        <View style={styles.navbar}>
          <NavBar logout={logout}/>
        </View>
        {/* <Header></Header> */}
        <View style={styles.container}>
          <Text style={styles.text}>Home Screen</Text>
        </View>
      </View>
    )
  }
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.wallpaper,
    },
    navbar: {
      position: 'absolute',
      flex: 1,
      top: 25,
      left: 25,
      zIndex: 1,
    },
    text: {
      color: Colors.white
    },

  });


export default HomeScreen;