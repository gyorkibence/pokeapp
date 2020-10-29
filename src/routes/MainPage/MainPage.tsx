import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { Spin, Checkbox } from 'antd';
import { getTypes, getNames } from 'actions/appActions';
import Select from 'components/Select/Select';
import List from 'components/List/List';
import './main-page.scss';

const MainPage: FC = () => {
  const dispatch = useDispatch();
  const [own, setOwn] = useState(false);

  const {
    loading,
    types,
    namesLoading,
    names,
    selectedPokemons,
  } = useSelector((state: RootStateOrAny) => state.app);

  useEffect(() => {
    if (!types) {
      dispatch(getTypes());
    }
  }, [dispatch]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="main-page">
      <div className="main-title">Pokemon application</div>
      {
        loading && (
          <Spin tip="Loading..." />
        )
      }
      {
        types && (
          <>
            <Select
              onChange={(url: string) => { dispatch(getNames(url)); }}
              data={types}
              placeholder="Select pokemon type"
            />
            <Checkbox onChange={(e) => { setOwn(e.target.checked); }}>
              Own pokemons
            </Checkbox>
          </>
        )
      }
      {
        namesLoading && (
          <div style={{ marginTop: 30, marginBottom: 30 }}>
            <Spin tip="Loading..." />
          </div>
        )
      }
      {
        names && !namesLoading && !own && (
          <>
            <List
              listTitle={`List of ${names.name} pokemons`}
              data={names.pokemon.map(({ pokemon: { name } }: { pokemon: { name: string } }) => name)}
              emptyTitle="There's no pokemon for this type"
            />
          </>
        )
      }
      {
        own && (
          <>
            <List
              listTitle="List of own pokemons"
              data={selectedPokemons}
              emptyTitle="You haven't got any pokemon (yet) :)"
            />
          </>
        )
      }
    </div>
  );
};

export default MainPage;
