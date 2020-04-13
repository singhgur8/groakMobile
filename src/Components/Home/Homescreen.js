import 'react-native-gesture-handler';
import React from 'react';
import {View, Button, Text, StyleSheet, Picker} from 'react-native'
import NavBar from '../NavBar';
import Colors from '../../tools/Colors';



class HomeScreen extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    let {logout} = this.props
    let selectedValue = 'js'
    return(
      <View style={{flex:1}}>
        <View style={styles.navbar}>
          <NavBar logout={logout}/>
        </View>
        <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedValue}
              style={{ height: 50, width: 150}}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
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
    pickerContainer: {
      flex: 1,
      paddingTop: 40,
      alignItems: "center"
    }
  });


export default HomeScreen;