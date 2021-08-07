import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput, TouchableHighlight } from 'react-native';
// import axios from 'axios';
// import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
// import ActionBar from "../components/ActionBar";

const products = { "key": 1, "name": "C vitamin", "key": 2, "stock": "20" };

const ViewOneItem = () => {

    const [quantity, setQuantity] = useState('200 cups');

    // componentDidMount() {
    //     const _id = this.props.navigation.getParam('_id', '');
    //     axios.get(`http://192.168.8.100:3000/api/product/${_id}`)
    //         .then(res => {
    //             const foodsFromServer = res.data;
    //             this.setState({ foodsFromServer });
    //         })

    // }

    // componentDidUpdate() {
    //     const _id = this.props.navigation.getParam('_id', '');
    //     axios.get(`http://192.168.8.100:3000/api/product/${_id}`)
    //         .then(res => {
    //             const foodsFromServer = res.data;
    //             this.setState({ foodsFromServer });
    //         })
    // }


    return (
        <ScrollView>
            <View style={styles.container}>
                <TouchableOpacity style={styles.imageStyle}>
                    <Image
                        source={{ uri: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx1U-RRz0Tq7zK8RD7hibxBUWfHSNRwbUa7Q&usqp=CAU` }}
                        style={{ width: '100%', height: '100%', }}
                    >
                    </Image>
                </TouchableOpacity>

                <View style={{ flexDirection: 'column', width: '100%' }}>
                    <Text style={styles.title}>{products.name}</Text>
                    <TouchableOpacity style={styles.infomation}>
                        <View>
                            <Text style={styles.text}>Quantity</Text>
                            <Text style={styles.text}>{quantity}</Text>
                        </View>
                        <Icon name="pencil" size={20} style={{ width: 50 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.infomation}>
                        <View>
                            <Text style={styles.text}>Description</Text>
                            <Text style={styles.text}>Use for infections. Availability is very Limited. Reduce wastage. </Text>
                        </View>
                        <Icon name="pencil" size={20} style={{ width: 50 }} />
                    </TouchableOpacity>
                </View>
                <TouchableHighlight underlayColor='#e3d8dd' style={styles.buttonContainer} >
                    <Text>Save</Text>
                </TouchableHighlight>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        marginVertical: 5,
    },
    imageStyle: {
        height: 240,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    title: {
        alignContent: 'center',
        width: '85%',
        fontSize: 24,
        margin: '5%',
        fontWeight: 'bold'
    },
    infomation: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        width: '85%',
        marginStart: '15%',
        paddingVertical: 20,
    },
    text: {
        marginVertical: 10,
        width: 250,
    },
    buttonContainer: {
        shadowColor: '#000',
        shadowOpacity: 50,
        elevation: 5,
        height: 45,
        backgroundColor: "#0055FF",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 35,
        marginTop: 30,
        width: 300,
        borderRadius: 30,
    },
});

export default ViewOneItem;