import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList, } from 'react-native';
import { SearchBar } from 'react-native-elements';

import Medication from './Medication.component';

const data = [{ "key": 1, "name": "C vitamin", "key": 2, "stock": "20" }, { "key": 3, "name": "B vitamin", "stock": "10" }, { "key": 4, "name": "C vitamin", "stock": "20" }, { "key": 5, "name": "B vitamin", "stock": "10" }, { "key": 6, "name": "C vitamin", "stock": "20" }, { "key": 7, "name": "B vitamin", "stock": "10" }, { "key": 8, "name": "C vitamin", "stock": "20" }, { "key": 9, "name": "B vitamin", "stock": "10" }, { "key": 10, "name": "C vitamin", "stock": "20" }, { "key": 11, "name": "B vitamin", "stock": "10" }];

const Medications = ({navigation}) => {
    const [searchText, setSearchText] = useState('');
    const [products, setProducts] = useState(data);

    const searchFilter = (text) => {
        setProducts(products.filter((product) => {
            return product.name === text
        }))
    };

    return (
        <View style={styles.body}>
            <SearchBar
                round
                searchIcon={{ size: 24 }}
                onChangeText={text => {
                    setSearchText(text)
                    searchFilter(text)
                }}
                onClear={text => {
                    setSearchText(text)
                    searchFilter(text)
                }}
                placeholder="Search..."
                value={searchText}
                containerStyle={{ backgroundColor: 'black', margin: 0 }}
            />

            <FlatList
                data={products}
                renderItem={({ item }) =>
                    <Medication product={item} navigation={navigation}/>
                }
                keyExtractor={(item) => item.key}
            // ItemSeparatorComponent={() => <View style={{ height: 0.5, backgroundColor: '#000' }} />}
            />
        </View>

    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    body: {
        flex: 1,
        justifyContent: 'center'
    }
});

export default Medications;


