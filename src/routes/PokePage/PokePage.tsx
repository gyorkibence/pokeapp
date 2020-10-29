import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { getPokemon, selectPokemon } from 'actions/appActions';
import { history } from 'services/config';
import Card from 'components/Card/Card';
import { Spin, Button } from 'antd';
import './poke-page.scss';

const PokePage: FC = ({ match }: any) => {
  const dispatch = useDispatch();

  const {
    selectedPokemon,
    selectedPokemons,
    pokemonLoading,
  } = useSelector((state: RootStateOrAny) => state.app);

  useEffect(() => {
    dispatch(getPokemon(match.params.name));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
        selectedPokemon && !pokemonLoading && (
          <div className="page-container">
            <Card
              name={selectedPokemon.name}
              preview={selectedPokemon.sprites.other['official-artwork'].front_default}
              weight={selectedPokemon.weight}
              height={selectedPokemon.height}
              abilities={selectedPokemon.abilities
                .filter((ability: { is_hidden: boolean }) => !ability.is_hidden)
                .map((item: { ability: { name: string }}) => item.ability.name).join(', ')}
              selected={selectedPokemons.find((item: string) => item === selectedPokemon.name)}
            />
            <div className="button-container">
              <Button onClick={() => { dispatch(selectPokemon(selectedPokemon.name)); }} style={{ minWidth: 100 }}>
                {
                  selectedPokemons.find((item: string) => item === selectedPokemon.name)
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
};

export default PokePage;
