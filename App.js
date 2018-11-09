/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { Button } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

import store from './src/store.js'

import Pictures from './src/components/pictures.js'
import Settings from './src/components/Settings.js'
import Home from './src/components/Home.js'

const App = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

const Navigator =  createStackNavigator({
  Home: Home,
  Pictures:Pictures,
  Settings: Settings,
},
  {
    initialRouteName: 'Home',
    headerMode: 'none'
    /* The header config from HomeScreen is now here */
    // navigationOptions: {
    //   headerStyle: {
    //     display: 'none',
    //   },
    //   headerTintColor: '#fff',
    //   headerTitleStyle: {
    //     fontWeight: 'bold',
    //   },
    //   headerRight: (
    //     <Button
    //       onPress={() => alert('This is a button!')}
    //       title="Info"
    //       color="#fff"
    //     />
    //   ),
    // },
  }
  );

const drawerNavigator = createDrawerNavigator ({
   Main: {
     screen: Home
   }

})

export default App;

