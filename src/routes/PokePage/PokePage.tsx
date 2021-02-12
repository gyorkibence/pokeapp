import React, { useEffect } from 'react';
import { history } from 'services/config';
import { observer } from 'mobx-react';
import Card from 'components/Card/Card';
import { Spin, Button } from 'antd';
import { useStores } from 'store/useStore';
import './poke-page.scss';
import { GET_POKEMON } from 'queries';
import { useQuery } from '@apollo/client';

const PokePage = observer(({ match }: any) => {
  const { appStore } = useStores();
  const { selectedPokemons, selectPokemon } = appStore;
  const { loading: pokemonLoading, data: selectedPokemon } = useQuery(GET_POKEMON, { variables: { name: match.params.name } });
  return (
    <div className="poke-page">
      <div className="button-container">
        <Button onClick={() => { history.push('/'); }} style={{ minWidth: 100 }}>
          Go Back
        </Button>
      </div>
      <div className="main-title">Selected pokemon</div>
      {
        pokemonLoading && (
          <div style={{ marginTop: 30, marginBottom: 30 }}>
            <Spin tip="Loading..." />
          </div>
        )
      }
      {
        selectedPokemon?.pokemon && !pokemonLoading && (
          <div className="page-container">
            <Card
              name={selectedPokemon.pokemon.name}
              preview={selectedPokemon.pokemon.sprites.front_default}
              weight={selectedPokemon.pokemon.weight}
              height={selectedPokemon.pokemon.height}
              abilities={selectedPokemon.pokemon.abilities
                .filter((ability: { is_hidden: boolean }) => !ability.is_hidden)
                .map((item: { ability: { name: string } }) => item.ability.name).join(', ')}
              selected={!!selectedPokemons.find((item: string) => item === selectedPokemon.pokemon.name)}
            />
            <div className="button-container">
              <Button onClick={() => { selectPokemon(selectedPokemon.pokemon.name); }} style={{ minWidth: 100 }}>
                {
                  selectedPokemons.find((item: string) => item === selectedPokemon.pokemon.name)
                    ? 'Release'
                    : 'Catch'
                }
              </Button>
            </div>
          </div>
        )
      }
    </div>
  );
});

export default PokePage;
