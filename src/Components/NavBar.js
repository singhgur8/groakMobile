import React, { Component, useReducer } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Button
} from "react-native";
import { exp } from "react-native-reanimated";
import Colors from '../tools/Colors'
import AsyncStorage from '@react-native-community/async-storage';


//ADAPT the design, so it doesnt take props from each of the screens but straight from the app
// it needs navigation and logout
class NavBar extends Component {
    constructor(props){
        super(props)
        this.state ={
            modalVisible: false,
            modalExpand: false
        }
        this.setModalExpand = this.setModalExpand.bind(this)
        this.setModalVisible = this.setModalVisible.bind(this)
        this.changeScreen = this.changeScreen.bind(this)
        this.signOut = this.signOut.bind(this)
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    setModalExpand = (expand) =>{
        this.setState({modalExpand: expand})
    }

    changeScreen(screenName){
        let {navigation} = this.props
        let {modalVisible} = this.state
        this.setModalVisible(!modalVisible);
        navigation.navigate(screenName)
    }

    seperator(){
        return(
            <View
                style={{
                    borderWidth: StyleSheet.hairlineWidth,
                    borderColor: 'white',
                    width: '50%',
                    marginBottom: 10
                }}
            />
        )
    }

    signOut(){
        let {modalVisible} = this.state
        AsyncStorage.clear()
        .then(() => {
            this.setModalVisible(!modalVisible)
            this.props.logout()
        })
        .catch(err => {
            alert('unable to logout')
        })
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
                                <Text style={styles.modalText}>Menu</Text>
                                {this.seperator()}
                                <TouchableOpacity>
                                    <Text style={styles.modalText} onPress={()=>{this.changeScreen('Home')}}>Home</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={styles.modalText} onPress={()=>{this.changeScreen('Details')}}>Details</Text>
                                </TouchableOpacity>
                                <TouchableHighlight
                                    style={{ ...styles.closeButton, backgroundColor: Colors.button }}
                                    onPress={() => {
                                    this.setModalVisible(!modalVisible);
                                    }}
                                >
                                    <Text style={{...styles.textStyle, color: Colors.Black}}>X</Text>
                                </TouchableHighlight>
                                <View style={styles.footer}>
                                    <TouchableHighlight>
                                        <Text style={styles.modalText} onPress={this.signOut}>
                                            Sign Out
                                        </Text>
                                    </TouchableHighlight>
                                </View>
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
        marginTop: 22,
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
        width: '95%',
        margin: 10,
        backgroundColor: "rgba(52, 52, 52, 0.9)",
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
    closeButton: {
        backgroundColor: "#F194FF",
        borderRadius: 5,
        padding: 10,
        elevation: 2,
        top: 15,
        left: 15,
        position: 'absolute',
        height: 55,
        width: 55
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
        textAlign: "center",
        color: Colors.white,
        fontSize: 40
    },
    menu:{
        padding: 10,
        elevation: 2,
        height: 55,
        width: '100%',
        backgroundColor: Colors.button,
        borderRadius: 5
    },
    footer: {
        position: 'absolute',
        bottom: 20,
        backgroundColor: '#971717',
        height: 50,
        width: 200,
        borderRadius: 5
    }

});

export default NavBar;