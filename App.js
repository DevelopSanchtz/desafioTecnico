import 'react-native-gesture-handler'
import React from 'react';
import { } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './Navigation/StackNavigator';

const App = () => {
 

  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  );
};

export default App;
