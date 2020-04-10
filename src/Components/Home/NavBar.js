import React, { Component } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";
import { exp } from "react-native-reanimated";
import Colors from '../../tools/Colors'

class NavBar extends Component {
  state = {
    modalVisible: false,
    modalExpand: false
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  setModalExpand = (expand) =>{
      this.setState({modalExpand: expand})
  }

  render() {
    const { modalVisible } = this.state;
    const menu = '\u2630'
    return (
        <View style={styles.container}>
            <TouchableHighlight
                style={styles.menu}
                onPress={() => {
                    this.setModalVisible(true);
                }}
                >
                <Text style={styles.textStyle}>{menu}</Text>
            </TouchableHighlight>
            <View style={styles.centeredView}>
                <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
                >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                    <Text style={styles.modalText}>Hello World!</Text>

                    <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                        onPress={() => {
                        this.setModalVisible(!modalVisible);
                        }}
                    >
                        <Text style={styles.textStyle}>X</Text>
                    </TouchableHighlight>
                    </View>
                </View>
                </Modal>
            </View>

        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(52, 52, 52, 0)',
    }, 
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        position:"absolute",
        top: 0,
        left: 0,
        height:'95%',
        width: 'auto',
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    textStyle: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
        justifyContent: 'center',
        alignItems: "center",
        alignSelf: "center",
        alignContent: 'center',
        fontSize: 40,
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    menu:{
        padding: 10,
        elevation: 2,
        height: 55,
        width: '100%',
        backgroundColor: Colors.button,
        borderRadius: 5
    }
});

export default NavBar;