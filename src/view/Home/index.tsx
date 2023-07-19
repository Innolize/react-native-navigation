import {Button, Text, View} from 'react-native';
import React from 'react';
import {SCREENS} from '../../config/routes';
import {RootStackParamList} from '..';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, SCREENS.HOME>;

const Home = ({navigation}: Props) => {
  console.log('home');
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home</Text>
      <Button
        onPress={() => navigation.navigate(SCREENS.STORES)}
        title="Stores"
      />
    </View>
  );
};

export default Home;
