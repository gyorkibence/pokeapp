export type appState = {
  loading: boolean,
  namesLoading: boolean,
  pokemonLoading: boolean,
  types: Array<any> | null,
  names: Array<any> | null,
  selectedPokemon: Array<any> | null,
  selectedPokemons: Array<any>,
};

export const initialState: appState = {
  loading: false,
  namesLoading: false,
  pokemonLoading: false,
  types: null,
  names: null,
  selectedPokemon: null,
  selectedPokemons: [],
};
