import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput, TouchableHighlight, } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const products = { "key": 1, "name": "C vitamin", "key": 2, "stock": "20" };

const AddItems = () => {

    const [quantity, setQuantity] = useState(2);
    const [isSelected, setIsSelected] = useState(false);

    const updateProps = (event) => {

    }
    const saveImage = (event) => {

    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.titleView}>
                <Text style={styles.title}>Add New Medication</Text>
                <CheckBox
                    value={isSelected}
                    onValueChange={(value) => setIsSelected(value)}
                    style={styles.checkbox}
                    disabled={false}
                    tintColors={{ true: '#0055FF', false: '#FF5555' }}
                />
            </View>

            <View style={styles.inputContainers}>
                <View style={styles.inputWrapper}>
                    <Text style={{ fontSize: 18, padding: 5 }}>Name</Text>
                    <TextInput
                        name="name"
                        style={styles.inputContainer}
                        onChangeText={updateProps}
                        // placeholder="Item Name"
                        underlineColorAndroid='transparent'
                        editable={isSelected ? true : false}
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <Text style={{ fontSize: 18, padding: 5 }}>Quantity</Text>
                    <TextInput
                        name="quantity"
                        style={styles.inputContainer}
                        onChangeText={updateProps}
                        // placeholder="Quantity"
                        underlineColorAndroid='transparent'
                        editable={isSelected ? true : false}
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <Text style={{ fontSize: 18, padding: 5 }}>Dscreption</Text>
                    <TextInput
                        name="descreption"
                        multiline={true}
                        numberOfLines={5}
                        style={styles.inputContainer}
                        onChangeText={updateProps}
                        // placeholder="Descreption"
                        underlineColorAndroid='transparent'
                        editable={isSelected ? true : false}
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <Text style={{ fontSize: 18, padding: 5 }}>Upload Image</Text>
                    <View style={styles.imageContainer}>
                        <TouchableHighlight
                            style={styles.selectButton}
                            onPress={() => { launchCamera({ mediaType: 'photo' }, saveImage) }}
                            disabled={!isSelected ? true : false}
                        >
                            <Text>Select Image</Text>
                        </TouchableHighlight>
                        <Text style={{ fontSize: 14, padding: 5, marginLeft: 20 }}>Image Name</Text>
                    </View>
                </View>

                <TouchableHighlight underlayColor='#e3d8dd' style={styles.buttonContainer} >
                    <Text>Save</Text>
                </TouchableHighlight>
            </View>
        </ScrollView >
    );
}

const styles = StyleSheet.create({

    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
    },
    titleView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '10%',
        backgroundColor: '#222',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    checkbox: {
        transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
        
    },
    inputContainers: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        backgroundColor: '#FFFFFF'
    },
    inputWrapper: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'column',
        margin: 10,
        height: 'auto',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        padding: 5,
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#eee',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 250,
        marginBottom: 10,
        flexDirection: 'row',
        alignSelf: 'center',
        margin: 10,
        padding: 10
    },
    imageContainer: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    selectButton: {
        shadowColor: '#000',
        elevation: 2,
        height: 45,
        backgroundColor: "#FFFFFF",
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 25,
        marginTop: 10,
        width: 120,
        borderRadius: 5,
    },
    buttonContainer: {
        shadowColor: '#000',
        shadowOpacity: 50,
        height: 50,
        backgroundColor: "#0055FF",
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        marginBottom: 40,
        marginTop: 10,
        width: 300,
        borderRadius: 30,
    },
});

export default AddItems;