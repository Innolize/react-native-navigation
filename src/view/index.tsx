import React, {Component} from 'react';
import {LinkingOptions, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import Stores from './Stores';
import Profile from './Profile';
import {SCREENS} from '../config/routes';
import {Pikachu} from './Pikachu';
import {Bulbasaur} from './Bulbasaur';
import {Squirtle} from './Squirtle';
import {Text} from 'react-native';

export type RootStackParamList = {
  [SCREENS.HOME]: undefined;
  [SCREENS.STORES]: undefined;
  [SCREENS.PROFILE]: undefined;
  [SCREENS.PIKACHU]: undefined;
  [SCREENS.BULBASAUR]: undefined;
  [SCREENS.SQUIRTLE]: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: ['enjoyremote://app'],
  config: {
    screens: {
      [SCREENS.HOME]: '',
      [SCREENS.STORES]: 'stores',
      [SCREENS.PROFILE]: 'profile',
      [SCREENS.PIKACHU]: 'pikachu',
      [SCREENS.BULBASAUR]: 'bulbasaur',
      [SCREENS.SQUIRTLE]: 'squirtle',
    },
  },
};

export class Main extends Component {
  render() {
    return (
      <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
        <Stack.Navigator initialRouteName={SCREENS.HOME}>
          <Stack.Screen name={SCREENS.HOME} component={Home} />
          <Stack.Screen name={SCREENS.STORES} component={Stores} />
          <Stack.Screen name={SCREENS.PROFILE} component={Profile} />
          <Stack.Screen name={SCREENS.PIKACHU} component={Pikachu} />
          <Stack.Screen name={SCREENS.BULBASAUR} component={Bulbasaur} />
          <Stack.Screen name={SCREENS.SQUIRTLE} component={Squirtle} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Main;
