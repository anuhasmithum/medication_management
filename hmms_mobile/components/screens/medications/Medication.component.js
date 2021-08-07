import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';


const Medication = ({ product, navigation }) => {

    const ViewOneMedication = () => {
        return navigation.navigate('ViewOneItem');
    }

    return (
        <TouchableOpacity style={styles.container} onPress={ViewOneMedication}>
            <View style={styles.textRapper}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black', margin: 6 }}>Name: {product.name}</Text>
                <Text style={{ fontSize: 16, margin: 4, color: 'black', }}>Available: {product.stock} </Text>
            </View>
            <Image
                source={{ uri: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx1U-RRz0Tq7zK8RD7hibxBUWfHSNRwbUa7Q&usqp=CAU` }}
                style={{ width: 100, height: 100, margin: 5, borderRadius: 10 }}
            >
            </Image>
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        width: '98%',
        height: 150,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white',
        margin: 10,
        backgroundColor: '#fff',
        justifyContent: 'space-around',
    },
    textRapper: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20
    },
});
export default Medication;