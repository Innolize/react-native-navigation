import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import {getByName} from '../../services/poke-api/getOne';
import {Pokemon} from '../../interface/Pokemon';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '..';
import {SCREENS} from '../../config/routes';

type Props = NativeStackScreenProps<RootStackParamList, SCREENS.PIKACHU>;

export const Pikachu = ({navigation}: Props) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const obtainPokemon = async () => {
      try {
        setIsLoading(true);
        const currentPokemon = await getByName('pikachu');
        setPokemon(currentPokemon);
      } catch (error) {
        setError(error as string);
      } finally {
        setIsLoading(false);
      }
    };
    obtainPokemon();
  }, []);

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>{error}</Text>
      </View>
    );
  }

  if (pokemon) {
    return (
      <View>
        <Text testID="pikachu-id">{pokemon.id}</Text>
        <Text testID="pikachu-name">{pokemon.name}</Text>
        <Image
          testID="pikachu-image"
          source={{uri: pokemon.sprites.front_default}}
          style={{width: 200, height: 200}}
        />
      </View>
    );
  }

  return null;
};
