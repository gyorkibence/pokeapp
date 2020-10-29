import { takeEvery, call, put } from 'redux-saga/effects';
import { host } from 'services/consts';
import * as API from 'services/api';
import {
  GET_TYPES_R, GET_TYPES_S, GET_TYPES_F,
  GET_NAMES_R, GET_NAMES_S, GET_NAMES_F,
  GET_POKEMON_R, GET_POKEMON_S, GET_POKEMON_F,
  getNamesAction, getPokemonAction,
} from 'consts/actionTypes';

export function* getTypes() {
  try {
    const types = yield call(API.getData, `${host}/type`);
    yield put({
      type: GET_TYPES_S,
      payload: {
        types: types.results,
      },
    });
  } catch (error) {
    console.log(error); // eslint-disable-line
    yield put({
      type: GET_TYPES_F,
    });
  }
}

export function* getNames(action: getNamesAction) {
  try {
    const { url } = action.payload;
    const names = yield call(API.getData, url);
    yield put({
      type: GET_NAMES_S,
      payload: {
        names,
      },
    });
  } catch (error) {
    console.log(error); // eslint-disable-line
    yield put({
      type: GET_NAMES_F,
    });
  }
}

export function* getPokemon(action: getPokemonAction) {
  try {
    const { name } = action.payload;
    const pokemon = yield call(API.getData, `${host}/pokemon/${name}`);
    yield put({
      type: GET_POKEMON_S,
      payload: {
        pokemon,
      },
    });
  } catch (error) {
    console.log(error); // eslint-disable-line
    yield put({
      type: GET_POKEMON_F,
    });
  }
}

export const appSagas = [
  takeEvery(GET_TYPES_R, getTypes),
  takeEvery(GET_NAMES_R, getNames),
  takeEvery(GET_POKEMON_R, getPokemon),
];
