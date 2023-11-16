import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SCREENS} from '../../config/routes';
import {RootStackParamList} from '..';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, SCREENS.HOME>;

const Home = ({navigation}: Props) => {
  console.log('home');
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        onPress={() => navigation.navigate(SCREENS.STORES)}
        title="Stores"
        testID="store-button"
      />
      <Button
        onPress={() => navigation.navigate(SCREENS.BULBASAUR)}
        title="Bulbasaur"
        testID="bulbasaur-button"
      />
      <Button
        onPress={() => navigation.navigate(SCREENS.SQUIRTLE)}
        title="Squirtle"
        testID="squirtle-button"
      />
      <Button
        onPress={() => navigation.navigate(SCREENS.SQUIRTLE)}
        title="Pikachu"
        testID="pikachu-button"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

export default Home;
