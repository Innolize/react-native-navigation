import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import {getByName} from '../../services/poke-api/getOne';
import {Pokemon} from '../../interface/Pokemon';

export const Bulbasaur = () => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const obtainPokemon = async () => {
      try {
        setIsLoading(true);
        const currentPokemon = await getByName('bulbasaur');
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
    console.log('isloading');
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    console.log('error');
    return (
      <View>
        <Text>{error}</Text>
      </View>
    );
  }

  if (pokemon) {
    console.log('pokemon');
    return (
      <View>
        <Text>{pokemon.id}</Text>
        <Text testID="bulbasaur-name">{pokemon.name}</Text>
        <Image source={{uri: pokemon.sprites.front_default}} />
      </View>
    );
  }

  return null;
};
