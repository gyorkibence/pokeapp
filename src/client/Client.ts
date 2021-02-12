import { host } from 'services/consts';
import * as API from 'services/api';

class Client {
  getNames = async (url: string) => {
    try {
      const names = API.getData(url);
      return names;
    } catch (error) {
      return error;
    }
  };

  getPokemon = async (name: string) => {
    try {
      const pokemon = await API.getData(`${host}/pokemon/${name}`);
      return pokemon;
    } catch (error) {
      return error;
    }
  };
};

export default new Client();
