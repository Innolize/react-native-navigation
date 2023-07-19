import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import Stores from './Stores';
import Profile from './Profile';
import {SCREENS} from '../config/routes';
export type RootStackParamList = {
  [SCREENS.HOME]: undefined;
  [SCREENS.STORES]: undefined;
  [SCREENS.PROFILE]: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export class Main extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={SCREENS.HOME}>
          <Stack.Screen name={SCREENS.HOME} component={Home} />
          <Stack.Screen name={SCREENS.STORES} component={Stores} />
          <Stack.Screen name={SCREENS.PROFILE} component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Main;
