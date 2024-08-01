// heroesView.tsx
import React from 'react';
import HeroList from './heroList';
import useFetch from './useFetch';
import { Hero } from './types';

const HeroesView: React.FC = () => {
  const { data: heroes, isPending, error } = useFetch<Hero[]>('http://localhost:8000/heroes');

  return (
    <div className="heroes-view">
      {error && <div>{error}</div>}
      <h2>All Heroes</h2>
      {isPending && <div>Loading...</div>}
      {heroes && <HeroList heroes={heroes} title="All Heroes"/>}
    </div>
  );
}

export default HeroesView;
