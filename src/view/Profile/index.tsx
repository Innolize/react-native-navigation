import {Button, Text, View} from 'react-native';
import React from 'react';
import {RootStackParamList} from '..';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SCREENS} from '../../config/routes';

type Props = NativeStackScreenProps<RootStackParamList, SCREENS.PROFILE>;

const Profile = ({navigation}: Props) => {
  console.log('profile');
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile</Text>
      <Button onPress={() => navigation.navigate(SCREENS.HOME)} title="Home" />
    </View>
  );
};

export default Profile;
