import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { createAppContainer, createSwitchNavigator, } from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { ImageBackground, Text, View, StyleSheet, Button } from 'react-native'

import Medications from '../screens/medications/Medications';
import Dashboard from '../screens/Dashboard';
import LoginScreen from '../screens/Auth/LoginScreen';
import SignUpScreen from '../screens/Auth/SignUpScreen';
import AuthScreen from '../screens/Auth/AuthScreen';
import Settings from '../screens/settings/Settings'
import ViewOneItem from '../screens/medications/ViewOne';
import AddItems from '../screens/AddItem/AddItem';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const HomeScreen = () => {
    return (
        <ImageBackground source={{ uri: "https://source.unsplash.com/featured/?morning,light" }} style={{ flex: 1, justifyContent: 'center' }} >
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Button
                    onPress={() => console.log('Sign Out OnPress')}
                    title="Confirm Sign Out"
                    color='red'
                />
            </View>
        </ImageBackground>
    );
}

const DrawerNavigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="Medications"
                drawerActiveBackgroundColor='red'
                screenOptions={{ drawerStyle: { backgroundColor: 'gray', width: 240, overlayColor: 'transparent', } }}
            >
                <Drawer.Screen
                    name="Dashboard"
                    component={Dashboard} icon={() => <Icon color='#123' size={size} name='Entypo' />}
                    options={{
                        title: 'Dashboard',
                        headerStyle: {
                            backgroundColor: '#000',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                />
                <Drawer.Screen
                    name="Medications"
                    component={Medications}
                    options={{
                        title: 'Medications',
                        headerStyle: {
                            backgroundColor: '#000',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                />
                <Drawer.Screen
                    name="Settings"
                    component={Settings}
                    options={{
                        title: 'Settings',
                        headerStyle: {
                            backgroundColor: '#000',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                />
                <Drawer.Screen name="Sign Out" component={HomeScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

// const AppNavigation = () => {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator initialRouteName="Dashboard" >
//                 <Stack.Screen name="Medications" component={Medications} />
//                 <Stack.Screen name="Dashboard" component={Dashboard} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// }

const AuthNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="AuthScreen" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="AuthScreen" component={AuthScreen} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
                <Stack.Screen name="Medications" component={Medications} />
                <Stack.Screen name="Dashboard" component={Dashboard} />
                <Stack.Screen name="ViewOneItem" component={ViewOneItem} />
                <Stack.Screen name="Settings" component={Settings} />
                <Stack.Screen name="AddItems" component={AddItems} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


const MainNavigation = createSwitchNavigator({
    // appNavigation: AppNavigation,
    authNavigation: AuthNavigation,
    drawerNavigator: DrawerNavigator
},

    {
        initialRouteName: 'authNavigation',
    })

const AppContainer = createAppContainer(MainNavigation);
export default AppContainer;
