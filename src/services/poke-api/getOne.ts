import PokeApi from '.';
import {Pokemon} from '../../interface/Pokemon';

export const getByName = async (name: string) => {
  try {
    const {data: pokemon} = await PokeApi.get<Pokemon>(`pokemon/${name}`);
    return pokemon;
  } catch (error) {
    throw new Error(`Couldn't get pokemon with name ${name}`);
  }
};
