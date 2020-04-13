import React, { Component, useState } from 'react';
import {Picker, Text, StyleSheet, View, TextInput, Button, ScrollView, ImageBackground, LayoutAnimation} from 'react-native';
import Colors from '../../tools/Colors'
import Font from '../../tools/Styles'
import { ceil } from 'react-native-reanimated';

// Note UI not set to work on android, needs UI manager, read docs on layout animaiton

export default class DetailItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
        showAnswer: false
    }
   this.toggleAnswer = this.toggleAnswer.bind(this)
  }

  toggleAnswer(){
    LayoutAnimation.easeInEaseOut();
    this.setState({showAnswer: !this.state.showAnswer})
  }

  render() {
      let {question, answer} = this.props.QandA
    return (
        <View style={styles.container}>
            <View style={styles.questionContainer}>
                <Text style={styles.questionText}>
                    {question}
                </Text>
                <Text onPress={this.toggleAnswer} style={styles.button}>{this.state.showAnswer === false ? '+' : '-' }</Text>
            </View>

            {this.state.showAnswer === true ? <Text style={styles.answer}>{answer}</Text>: null}
        
        </View>
    );
  }
}

// CHANGE ALL THE VIEWS TO COME FROM COLORS, and maybe have Fonts in there too... make it one file called Styles?
const styles = StyleSheet.create({
    container: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        width: 350,
        padding: 10,
        borderColor: Colors.text
    },
    questionContainer: {
        flexDirection:"row"
    },
    questionText: {
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: Font.font,
        marginRight: 10,
        color: Colors.text
    },
    button: {
        fontSize: 30,
        marginTop: -8,
        color: Colors.button
    },
    answer:{
        fontFamily: Font.font,
        fontSize:18,
        color: Colors.title
    }
});