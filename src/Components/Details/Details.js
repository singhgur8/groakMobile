import React from "react";
import {
  StyleSheet,
  Text,
  View
} from "react-native";
import Navbar from '../NavBar'
import Colors from '../../tools/Colors'
import FAQs from './FAQs'
import DetailItem from './DetailItem';
import { ScrollView } from "react-native-gesture-handler";


function DetailsScreen({logout}) {
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <Navbar logout={logout}/>
        </View>
        <Text style={styles.title}>Details</Text>
        <View style={styles.seperator}/>
        <View style = {styles.innerContainer}>
          <ScrollView style={styles.scrollView}
          contentContainerStyle={{alignItems: "center", justifyContent: "center"}}
          >
            {FAQs.map((item, idx) => {
              return(
                <DetailItem
                  QandA = {item}
                  index = {idx}
                />
              )
            })}
          </ScrollView>
        </View>
        <View style={{flex: .1}}></View>
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
  },  
  title: {
    fontSize: 30,
    paddingTop: 73,
    fontWeight: 'bold',
    fontFamily: 'Bodoni 72',
    marginBottom: -10,
    color: Colors.title
  },
  scrollView: {
    flex: 1,
    paddingTop: 10,
  },
  seperator: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: '100%',
    margin: 10,
    borderColor: Colors.text
  },
  innerContainer: {
    flex: 1,
    backgroundColor: Colors.innerContainer,
    borderRadius: 10
  }
});
  
export default DetailsScreen;