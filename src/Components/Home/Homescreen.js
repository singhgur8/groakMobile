import 'react-native-gesture-handler';
import React from 'react';
import {View, Button, Text, StyleSheet } from 'react-native'
import NavBar from '../NavBar';
import Colors from '../../tools/Colors';
import Piechart from '../Piechart/pie';


// React's default picker is really lousey, its kind of a modal that shows whicch lets you scroll throught things
// then i would still have to select something. just see if there is already built drop down menus
// if not, then i will have to create my own
const demoData = [
  {
      name: 'mexican',
      number: 40,
      color: '#0d2f51'
  },
  {
      name: 'Italian',
      number: 20,
      color: '#28BD8B'
  },
  {
      name: 'Asian',
      number: 30,
      color: '#F66A6A'
  },
  {
      name: 'Indian',
      number: 10,
      color: 'pink'
  },
  {
    name: 'Paki',
    number: 0,
    color: 'red'
  },
  {
    name: 'American',
    number: 0,
    color: 'green'
  }
];

class createFakeData {
  constructor(){
    this.data = demoData
  }

  generateData(){
    for (let i = 0; i < 5; i++) {
      let newNum = Math.random()*100
      this.data[i].number = newNum
    }
    // console.log(this.data)
    return this.data
  }
}


class HomeScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
    this.mockData = new createFakeData()
    this.state.data = this.mockData.generateData().sort((a,b) => b.number - a.number).slice(0,4)

    this.updatePreferences = this.updatePreferences.bind(this)
  }

  // TEST the pie chart by passing down different props each time

  updatePreferences(){
    // this would be the api req, gets all the info, say it gets it, then it filters it here? NO we do that on server side
    // but for time being to test how it will work, do it
    let changedData = this.mockData.generateData().sort((a,b) => b.number - a.number).slice(0,4)
    this.setState({
      data: changedData
    })

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
          <Piechart demoData={this.state.data}/>
        </View>
        <Text onPress={this.updatePreferences}>
          Add Users
        </Text>
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