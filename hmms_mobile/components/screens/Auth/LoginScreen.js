import React, { useState } from "react";
import { Alert, Picker, View, Text, StatusBar, StyleSheet, Image, TextInput, TouchableHighlight } from "react-native"; import axios from "react-native-axios";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from "react-native-vector-icons/FontAwesome";


// import validate from "../utility/validation"
// import AsyncStorage from "@react-native-community/async-storage"


const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [wrongPassword, setWrongPassword] = useState(false);

    //   setToken = async token => {
    //     await AsyncStorage.setItem("token", token).then(async val => {
    //         const token = await AsyncStorage.getItem('token')
    //         console.log(token)
    //         this.props.navigation.navigate('Dashboard');
    //     });
    //   };


    const signIn = () => {
        axios
            .post(`http://192.168.8.100:3000/api/signin`, {
                email: this.state.controls.email.value,
                password: this.state.controls.password.value
            })
            .then(res => {
                if (res.status === 200) {
                    this.setToken(res.data.token);
                    // navigation.navigate('Dashboard');
                }
                if (res.status === 201) {
                    Alert.alert(
                        "Oops",
                        res.data.msg
                    )
                }
            })
            .catch(err => {
                console.log("Network Error Something Went Wrong");
                throw err;
            });
    };


    const updateInputState = (key, value) => {
        //   let connectedValue = {};
        //   this.setState(prevState => {
        //     return {
        //       controls: {
        //         ...prevState.controls,

        //         [key]: {
        //           ...prevState.controls[key],
        //           value: value,
        //           valid: validate(
        //             value,
        //             prevState.controls[key].validationRules,
        //             connectedValue
        //           ),
        //           touched: true
        //         }
        //       }
        //     };
        //   });
    };

    return (
        <View style={styles.con}>
            <StatusBar backgroundColor="#0055FF" barStyle="light-content" />
            <View style={styles.container}>
                <View style={styles.container}>
                    <TextInput style={[styles.inputContainer, email ? styles.inputInvalid : null]}
                        value={email}
                        onChangeText={(val) => setEmail(val)}
                        placeholder="Email"
                        keyboardType="email-address"
                        underlineColorAndroid='transparent'
                    />
                    <Text style={!email ? styles.invalidMsg : styles.invalidMsgFalse} >Enter Valid Email Address</Text>

                    <TextInput
                        value={password}
                        onChangeText={(val) => setPassword(val)}
                        style={[styles.inputContainer, !wrongPassword ? styles.inputInvalid : null]}
                        placeholder="Password"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                    />

                    <TouchableHighlight underlayColor='#e3d8dd'
                        disabled={!(email && password)}
                        style={!(email && password) ? styles.buttonDisable : styles.buttonContainer}
                        onPress={() => { signIn() }}
                    >
                        <Text style={styles.loginText}>Login</Text>
                    </TouchableHighlight>

                    <TouchableHighlight underlayColor='none' style={styles.btnsm} onPress={() => navigation.navigate('SignUpScreen')}  >
                        <Text>Create New Account</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    icon: {
        margin: 5
    },
    con: {
        backgroundColor: '#EEEEEE',
        flex: 1
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EEEEEE',
    },

    btnsm: {
        padding: 3,
        paddingHorizontal: 6,
        borderRadius: 13,
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold'
    },

    welcome: {

        fontSize: 40,
        textAlign: 'center',
        margin: 10,
    },
    welcome1: {

        margin: 40,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    buttonContainer: {
        shadowColor: '#000',
        shadowOpacity: 50,
        elevation: 5,
        height: 45,
        backgroundColor: "#00b5ec",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        marginTop: 30,
        width: 200,
        borderRadius: 30,
    },
    buttonDisable: {
        shadowColor: '#000',
        shadowOpacity: 50,
        elevation: 5,

        height: 45,
        backgroundColor: "gray",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        marginTop: 30,
        width: 200,
        borderRadius: 30,
    },



    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        borderBottomWidth: 1,
        width: 300,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        padding: 10
    },
    inputInvalid: {
        borderLeftColor: 'red',
        borderLeftWidth: 3,

    },

    invalidMsg:
    {
        fontSize: 12,
        marginTop: -10,
        marginBottom: 10,
        color: 'red'
    },

    invalidMsgFalse: {

        color: "#EEEEEE",
        fontSize: 12
    }

});

export default LoginScreen;