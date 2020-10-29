// TYPE ACTIONS

export const GET_TYPES_R = 'GET_TYPES_R';
export interface getTypesAction {
  type: typeof GET_TYPES_R,
};

export const GET_TYPES_S = 'GET_TYPES_S';
export interface getTypesActionSucceeded {
  type: typeof GET_TYPES_S,
  payload: { types: Array<any> },
};

export const GET_TYPES_F = 'GET_TYPES_F';
export interface getTypesActionFailed {
  type: typeof GET_TYPES_F,
};

// NAME ACTIONS
export const GET_NAMES_R = 'GET_NAMES_R';
export interface getNamesAction {
  type: typeof GET_NAMES_R,
  payload: { url: string },
};

export const GET_NAMES_S = 'GET_NAMES_S';
export interface getNamesActionSucceeded {
  type: typeof GET_NAMES_S,
  payload: { names: Array<any> },
};

export const GET_NAMES_F = 'GET_NAMES_F';
export interface getNamesActionFailed {
  type: typeof GET_NAMES_F,
};

// POKEMON ACTIONS

export const GET_POKEMON_R = 'GET_POKEMON_R';
export interface getPokemonAction {
  type: typeof GET_POKEMON_R,
  payload: { name: string },
};

export const GET_POKEMON_S = 'GET_POKEMON_S';
export interface getPokemonActionSucceeded {
  type: typeof GET_POKEMON_S,
  payload: { pokemon: Array<any> },
};

export const GET_POKEMON_F = 'GET_POKEMON_F';
export interface getPokemonActionFailed {
  type: typeof GET_POKEMON_F,
};

// APP ACTIONS
export const SELECT_POKEMON = 'SELECT_POKEMON';
export interface selectPokemonAction {
  type: typeof SELECT_POKEMON,
  payload: { name: string },
};

export type appActionTypes = 
  getTypesAction
  | getTypesActionSucceeded
  | getTypesActionFailed
  | getNamesAction
  | getNamesActionSucceeded
  | getNamesActionFailed
  | getPokemonAction
  | getPokemonActionSucceeded
  | getPokemonActionFailed
  | selectPokemonAction
