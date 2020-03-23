/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Header from './Components/Header'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Login from './Components/Login'

// i might have to make this a class, with states
// so that i can track if the user is logged in,
// conditional render the login screen on the main page
  // main page will have a pie chart of the persons favortie foods
  // or i could play with d3 and let the user have a choice of how
  // they want it displayed by clicking on a tab

const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        {/* company logo goes here */}
        <Text style={styles.logo}>Groak!</Text>
        <Text style={{fontFamily: 'Bodoni 72'}}>Let us find food for you</Text>
        <View style={styles.login}>
          <Login></Login>
        </View>
      </SafeAreaView>
    </View>
    // <>
    //   <SafeAreaView>
    //     <ScrollView
    //       contentInsetAdjustmentBehavior="automatic"
    //       style={styles.scrollView}>

    //       <Header />

    //       {/* {global.HermesInternal == null ? null : (
    //         <View style={styles.engine}>
    //           <Text style={styles.footer}>Engine: Hermes</Text>
    //         </View>
    //       )} */}

    //       <View style={styles.body}>
    //         <View style={styles.sectionContainer}>
    //           {/* <Text style={styles.sectionTitle}>Step One: Gurjot's Awesome project</Text> */}
    //           {/* <Text style={styles.sectionDescription}>
    //             Edit <Text style={styles.highlight}>App.js</Text> to change this
    //             screen and then come back to see your edits. Gurjot Edited buddy
    //             some stuff in here like this.
    //           </Text> */}
    //         </View>
    //         <Main/>
    //         {/* <LearnMoreLinks /> */}
    //       </View>
    //     </ScrollView>
    //   </SafeAreaView>
    // </>
  );
};


// maybe later down the line add a splash screen here

// see what status bar and safe area view and scroll view are!!
// and idk why i had to add flex: 1 for it to cover the whole page, is there already a flexbox implemented?
// i guess i actually dont know how the css is working on this app

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#e9967a',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: '#e9967a',
    flex: 1,
    fontSize: 30
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  container: {
    backgroundColor: '#e9967a',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8fbc8f'
  },
  logo: {
    fontSize: 30,
    fontWeight: '600',
    fontFamily: 'Bodoni 72'
  },
  login: {
    backgroundColor: '#5f9ea0',
    width: '80%',
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default App;
