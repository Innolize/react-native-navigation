import {Button, Text, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '..';
import {SCREENS} from '../../config/routes';

type Props = NativeStackScreenProps<RootStackParamList, SCREENS.STORES>;

const Stores = ({navigation}: Props) => {
  console.log('stores');
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Stores</Text>
      <Button
        onPress={() => navigation.navigate(SCREENS.PROFILE)}
        title="Profile"
      />
    </View>
  );
};

export default Stores;
