import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Profile = (props) => {
    const [user, setUser] = useState('');
    return (
        <View style={styles.homeContainer}>
            {user ?
                <Image
                    source={{ uri: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx1U-RRz0Tq7zK8RD7hibxBUWfHSNRwbUa7Q&usqp=CAU` }}
                    style={{ width: 150, height: 120, marginTop: 30, borderRadius: 10 }}
                >
                </Image>
                :
                <Icon name='user-circle-o' size={120} style={styles.icon} />
            }
            <Text style={styles.text1}>Profile</Text>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => { props.navigation.navigate('Settings') }}
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
        backgroundColor: '#FFF',
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
        shadowColor: '#FFF',
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

export default Profile;