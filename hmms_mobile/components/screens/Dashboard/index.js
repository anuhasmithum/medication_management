import React from 'react';
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native';

import Tablets from '../DashboardComponents/Tablets';
import Tools from '../DashboardComponents/Tools';
import Profile from '../DashboardComponents/Profile';
import Cards from '../DashboardComponents/AddNewItem';


const Dashboard = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='blue' barStyle="light-content" />
            <View style={styles.rowContainer}>
                <View style={styles.columnContainer} >
                    <Tablets navigation={navigation} />
                </View>

                <View style={styles.columnContainer}>
                    <Tools navigation={navigation} />
                </View>
            </View>
            <View style={styles.rowContainer}>
                <View style={styles.columnContainer}>
                    <Cards navigation={navigation} />
                </View>
                <View style={styles.columnContainer}>
                    <Profile navigation={navigation} />
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEE'
    },
    rowContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: '8%',
    },
    columnContainer: {
        width: '48%',
        height: '60%',
        margin: 1,
        justifyContent: 'space-around',
    }
});
export default Dashboard;