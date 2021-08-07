import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';


const Tablets = (props) => {
    console.log(props)
    return (
        <View style={styles.homeContainer}>
            <Image
                source={{ uri: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx1U-RRz0Tq7zK8RD7hibxBUWfHSNRwbUa7Q&usqp=CAU` }}
                style={{ width: 150, height: 120, marginTop: 30, borderRadius: 10 }}
            >
            </Image>
            <Text style={styles.text1}>Tablets</Text>
            {/* <Text style={styles.text2}>Available</Text> */}
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => { props.navigation.navigate('Medications') }}
            >
                <Text>View</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    homeContainer: {
        flexDirection: 'column',
        height: '150%',
        backgroundColor: '#fff',
        borderRadius: 10,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    icon: {
        marginTop: 30
    },
    text1: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    buttonContainer: {
        shadowColor: '#fff',
        elevation: 1,
        height: 40,
        backgroundColor: "#f5f5f5",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        width: 100,
        borderRadius: 25,
    }
});

export default Tablets;