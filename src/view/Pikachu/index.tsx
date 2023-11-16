import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import {getByName} from '../../services/poke-api/getOne';
import {Pokemon} from '../../interface/Pokemon';

export const Pikachu = () => {
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
        <Text>{pokemon.id}</Text>
        <Text>{pokemon.name}</Text>
        <Image source={{uri: pokemon.sprites.front_default}} />
      </View>
    );
  }

  return null;
};
