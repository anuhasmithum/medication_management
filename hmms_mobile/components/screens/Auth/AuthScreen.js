import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, ImageBackground } from 'react-native'
import AsyncStorage from "@react-native-community/async-storage"
// import { Spinner } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AuthScreen = ({ navigation }) => {

    useEffect(async () => {
        setTimeout(async () => {
            const userToken = await AsyncStorage.getItem('token');
            if (!userToken) {
                console.log('token available');
                navigation.navigate('Dashboard');
            }
            else {
                await AsyncStorage.removeItem('token')
                console.log('no token available');
                navigation.navigate('LoginScreen');
            }
        }, 3000);

    });

    return (
        <ImageBackground source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_SzW911SuESlvPskS5N11WyZ04QGnwo35kA&usqp=CAU' }}
            style={{ width: '100%', height: '100%', opacity: 0.3 }}>
            <View style={{ display: "flex", marginTop: 200, alignItems: "center" }}>
                <Text style={{ fontSize: 30, color: '#000', marginTop: 30, fontWeight: 'bold', padding: 10, textAlign: 'center' }}>Welcom to HMMS</Text>
                <Text style={{ marginTop: 30, }}></Text>
                {/* <Spinner size='large' color='#252626' /> */}
                <Text style={{ fontSize: 20, color: '#252626' }}>Loading...</Text>
            </View>
        </ImageBackground>
    );
}

export default AuthScreen;