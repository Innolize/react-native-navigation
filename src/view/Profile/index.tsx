import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RootStackParamList} from '..';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SCREENS} from '../../config/routes';

type Props = NativeStackScreenProps<RootStackParamList, SCREENS.PROFILE>;

const Profile = ({navigation}: Props) => {
  console.log('profile');
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Button onPress={() => navigation.navigate(SCREENS.HOME)} title="Home" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

export default Profile;
