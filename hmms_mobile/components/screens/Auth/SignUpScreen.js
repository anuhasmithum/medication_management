import React, { useState } from "react";
import { View, Text, ScrollView, FlatList, Alert, StyleSheet, Picker, TextInput, TouchableHighlight } from "react-native";
import axios from "react-native-axios";
// import validate from "../utility/validation"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const SignUpScreen = ({navigation}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const updateInputState = (key, value) => {

    };

    const signUp = () => {
        axios
            .post(`http://192.168.8.100:3000/api/regcus`, {
                name: name,
                email: email,
                password: password,
                confirmPassword: confirmPassword
            })
            .then(res => {
                if (res.status === 200) {
                    Alert.alert(
                        "Done",
                        "Create Successfully"
                    )
                    navigation.navigate('Dashboard');
                }
                if (res.status === 201) {

                    Alert.alert(
                        "Oops",
                        res.data.msg
                    )
                }
            })
            .catch(err => {
                console.log(err);
                throw err;
            });

    };

    return (
        <ScrollView showsVerticalScrollIndicator={false} backgroundColor='#EEEEEE'>
            <View style={styles.container}>
                <TextInput
                    style={[styles.inputContainer, name ? styles.inputInvalid : null]}
                    value={name}
                    onChangeText={(val) => setName(val)}
                    placeholder="Name"
                    underlineColorAndroid='transparent'
                />
                <Text style={!name ? styles.invalidMsg : styles.invalidMsgFalse} >Name Is Requred</Text>

                <TextInput
                    style={[styles.inputContainer, !isValidEmail ? styles.inputInvalid : null]}
                    value={email}
                    onChangeText={(val) => setEmail(val)}
                    placeholder="Email"
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'
                    onPressIn={(val) => setIsValidEmail(val)}
                />
                <Text style={!email ? styles.invalidMsg : styles.invalidMsgFalse} >Enter Valid Email Address</Text>

                <TextInput
                    value={password}
                    onChangeText={(val) => setPassword(val)}
                    style={[styles.inputContainer, !password ? styles.inputInvalid : null]}
                    placeholder="Password"
                    secureTextEntry={true}
                    underlineColorAndroid='transparent'
                />
                <Text style={password ? styles.invalidMsg : styles.invalidMsgFalse} >Enter Strong Password</Text>


                <TextInput
                    value={confirmPassword}
                    onChangeText={(val) => setConfirmPassword(val)}
                    style={[styles.inputContainer, !confirmPassword ? styles.inputInvalid : null]}
                    placeholder="Re-Enter Password"
                    secureTextEntry={true}
                    underlineColorAndroid='transparent'

                />
                <Text style={confirmPassword ? styles.invalidMsg : styles.invalidMsgFalse} >Confirm Password Dose not Match</Text>

                <TouchableHighlight underlayColor='#e3d8dd'
                    disabled={!(name && email && password && confirmPassword)}
                    style={!(name && email && password && confirmPassword) ? styles.buttonDisable : styles.buttonContainer}
                    onPress={() => { signUp }}>

                    <Text style={styles.loginText}>Sign Up</Text>
                </TouchableHighlight>

                <TouchableHighlight underlayColor='none' style={styles.btnsm} onPress={() => navigation.navigate('LoginScreen')}  >
                    <Text>Login</Text>
                </TouchableHighlight>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EEEEEE',
        marginTop: 80,
    },
    btnsm: {
        padding: 3,
        paddingHorizontal: 8,
        borderRadius: 13,
        alignItems: 'center',
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
        marginBottom: 35,
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
        marginBottom: 35,
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
        marginTop: 12,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 2,
        padding: 10
    },
    inputInvalid: {
        borderLeftColor: 'red',
        borderLeftWidth: 3,
    },
    invalidMsg: {
        fontSize: 12,
        color: 'red'
    },
    invalidMsgFalse: {
        color: "#EEEEEE",
        fontSize: 12
    }
});

export default SignUpScreen;