import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, TouchableHighlight } from 'react-native';
// import axios from 'axios';
// import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
// import ActionBar from "../components/ActionBar";

const products = { "key": 1, "name": "C vitamin", "key": 2, "stock": "20" };

const AddItems = () => {

    const [quantity, setQuantity] = useState(2);

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
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            {/* <ActionBar navigation={this.props.navigation} name="ECOM" /> */}

            <View style={{ flex: 1, flexDirection: 'column', }}>

                <View style={styles.imageViewStyle}>
                    <TouchableOpacity style={styles.imageStyle}>
                        <Image
                            source={{ uri: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx1U-RRz0Tq7zK8RD7hibxBUWfHSNRwbUa7Q&usqp=CAU` }}
                            style={{ width: '100%', height: '100%', }}
                        >
                        </Image>
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', width: '100%', backgroundColor: 'white' }}>

                        <View style={styles.imageTextStyle}>
                            <Text style={{ fontSize: 22, padding: 5 }}>Name: {products.name}</Text>
                            <Text style={{ fontSize: 16, padding: 5 }}>Available: {products.stock}</Text>
                        </View>

                        {/* <TouchableOpacity
                            style={{ justifyContent: 'center', }}
                        >
                            <Icon
                                style={{
                                    width: 50, height: 50, backgroundColor: 'white',
                                    alignSelf: 'stretch', textAlign: 'center', justifyContent: 'center'
                                }}
                                name='cart-plus'
                                size={45}
                            />
                        </TouchableOpacity> */}
                    </View>
                </View>

                <View style={styles.changeQuantity}>
                    <Text style={styles.changeQuantityTitle} >Change Available Quantity</Text>
                    <TextInput style={styles.inputContainer}
                        value={quantity}
                        onChangeText={(val) => setQuantity(val)}
                        placeholder="New Quantity"
                        underlineColorAndroid='transparent'
                    />
                    <TouchableHighlight underlayColor='#e3d8dd' style={styles.buttonContainer} >
                        <Text>Save</Text>
                    </TouchableHighlight>
                </View>

            </View>
        </View>

    );
}

const styles = StyleSheet.create({

    imageViewStyle: {
        flexDirection: 'column',
        height: 340,
        marginHorizontal: 10,
        justifyContent: 'center',
        marginVertical: 5,
        alignItems: 'center',
        // borderWidth: 2,
        // borderColor: '#eee',
    },
    imageStyle: {
        height: 240,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    imageTextStyle: {
        height: 100,
        alignContent: 'center',
        width: '85%',
        padding: 20

    },
    changeQuantity: {
        backgroundColor: '#fff',
        // borderWidth: 2,
        // borderColor: '#eee',
        flexDirection: 'column',
        marginHorizontal: 10,
        marginVertical: 30,
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 5,
    },
    changeQuantityTitle: {
        color: 'black',
        padding: 20,
        fontSize: 20,
        alignSelf: 'flex-start'
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#eee',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 250,
        height: 50,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        padding: 10
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
        marginTop: 10,
        width: 100,
        borderRadius: 30,
    },
});

export default AddItems;