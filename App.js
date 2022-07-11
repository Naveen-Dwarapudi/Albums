/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View} from 'react-native';
import Header from './src/components/Header';
import AlbumsList from './src/components/AlbumsList';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Header headerText={'Albums'} />
      <AlbumsList />
    </View>
  );
};

export default App;
