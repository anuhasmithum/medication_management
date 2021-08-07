import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, ImageBackground } from 'react-native';
import { Provider } from 'react-redux';

import createStore from './components/redux/store';
import AppContainer from './components/navigations';


const App = () => {
  return (
    <Provider store={createStore}>
      <AppContainer />
    </Provider>
  );
}

export default App;
