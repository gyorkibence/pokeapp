import React, { useEffect, useState } from 'react';
import { Spin, Checkbox } from 'antd';
import { observer } from 'mobx-react';
import { useStores } from 'store/useStore';
import { useQuery } from '@apollo/client';
import { GET_TYPES } from 'queries';
import Select from 'components/Select/Select';
import List from 'components/List/List';
import './main-page.scss';

const MainPage = observer((props: any) => {
  const [own, setOwn] = useState(false);
  const { appStore } = useStores();
  const { loading, data: types } = useQuery(GET_TYPES);
  const { namesLoading, names, selectedPokemons, getNames } = appStore;
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
              onChange={(url: string) => { getNames(url); }}
              data={types.types.results || []}
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
});

export default MainPage;
