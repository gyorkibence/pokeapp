import {
  GET_TYPES_R, GET_TYPES_S, GET_TYPES_F,
  GET_NAMES_R, GET_NAMES_S, GET_NAMES_F,
  GET_POKEMON_R, GET_POKEMON_S, GET_POKEMON_F,
  SELECT_POKEMON,
  appActionTypes,
} from 'consts/actionTypes';
import { initialState, appState } from './initialState';

const appReducer = (state = initialState, action: appActionTypes): appState => {
  switch (action.type) {
    case GET_TYPES_R:
      return {
        ...state,
        loading: true,
      };

    case GET_TYPES_F:
      return {
        ...state,
        loading: false,
      };

    case GET_TYPES_S: {
      const { types } = action.payload;
      return {
        ...state,
        loading: false,
        types,
      };
    }

    case GET_NAMES_R:
      return {
        ...state,
        namesLoading: true,
      };

    case GET_NAMES_F:
      return {
        ...state,
        namesLoading: false,
      };

    case GET_NAMES_S: {
      const { names } = action.payload;
      return {
        ...state,
        namesLoading: false,
        names,
      };
    }

    case GET_POKEMON_R:
      return {
        ...state,
        pokemonLoading: true,
      };

    case GET_POKEMON_F:
      return {
        ...state,
        pokemonLoading: false,
      };

    case GET_POKEMON_S: {
      const { pokemon } = action.payload;
      return {
        ...state,
        pokemonLoading: false,
        selectedPokemon: pokemon,
      };
    }

    case SELECT_POKEMON: {
      const { name } = action.payload;
      if (state.selectedPokemons.find((item: string) => item === name)) {
        return {
          ...state,
          selectedPokemons: state.selectedPokemons.filter((item: string) => item !== name),
        };
      } else {
        return {
          ...state,
          selectedPokemons: state.selectedPokemons.concat(name),
        };
      }
    }

    default:
      return state;
  }
};

export default appReducer;
