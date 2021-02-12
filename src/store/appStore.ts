import Client from 'client/Client';
import { makeAutoObservable } from 'mobx';
import { useQuery } from '@apollo/client';
import { GET_TYPES } from 'queries';

class AppStore {
  loading = false;
  typesErrorMessage = '';
  namesErrorMessage = '';
  pokemonErrorMessage = '';
  namesLoading = false;
  pokemonLoading = false;
  types = null;
  names = null;
  selectedPokemon = null;
  selectedPokemons: string[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  getTypes = () => {
    this.types = null;
    this.loading = false;
    this.typesErrorMessage = '';
  }

  getNames = async (url: string) => {
    this.namesLoading = true;
    try {
      this.names = await Client.getNames(url);
      this.namesLoading = false;
    } catch (error) {
      this.namesErrorMessage = error.message;
      this.namesLoading = false;
    }
  }

  getPokemon = async (name: string) => {
    this.pokemonLoading = true;
    try {
      this.selectedPokemon = await Client.getPokemon(name);;
      this.pokemonLoading = false;
    } catch (error) {
      this.pokemonErrorMessage = error.message;
      this.pokemonLoading = false;
    }
  }

  selectPokemon = (name: string) => {
    if (this.selectedPokemons.find((item: string) => item === name)) {
      this.selectedPokemons = this.selectedPokemons.filter((item: string) => item !== name);
    } else {
      this.selectedPokemons.push(name);
    }
  }
};

export default new AppStore();