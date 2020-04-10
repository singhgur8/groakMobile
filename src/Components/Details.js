import React from "react";
import {
  StyleSheet,
  Text,
  View
} from "react-native";
import Navbar from './NavBar'
import { useNavigation } from '@react-navigation/native';
import Colors from '../tools/Colors'


function DetailsScreen({logout}) {
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <Navbar navigation={navigation} logout={logout}/>
        </View>
        <Text>Details Screen</Text>
      </View>
    );
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
  }
});
  
export default DetailsScreen;