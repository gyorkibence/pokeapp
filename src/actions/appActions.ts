import {
  GET_TYPES_R, GET_NAMES_R, GET_POKEMON_R, SELECT_POKEMON,
  getTypesAction, getNamesAction, getPokemonAction, selectPokemonAction,
} from 'consts/actionTypes';

export const getTypes = (): getTypesAction => ({
  type: GET_TYPES_R,
});

export const getNames = (url: string): getNamesAction => ({
  type: GET_NAMES_R,
  payload: {
    url,
  },
});

export const getPokemon = (name: string): getPokemonAction => ({
  type: GET_POKEMON_R,
  payload: {
    name,
  },
});

export const selectPokemon = (name: string): selectPokemonAction => ({
  type: SELECT_POKEMON,
  payload: {
    name,
  },
});
