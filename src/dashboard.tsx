import React from 'react';
import HeroList from './heroList';
import useFetch from './useFetch';
import { Hero } from './types'; // Import the shared Hero interface

const Dashboard: React.FC = () => {
  const { data: heroes, isPending, error } = useFetch<Hero[]>('http://localhost:8000/heroes');

  return (
    <div className="dashboard">
      {error && <div>{error}</div>}
      <h2>Dashboard</h2>
      {isPending && <div>Loading...</div>}
      {heroes && <HeroList heroes={heroes.filter((hero) => hero.class === 'top')} title="Top Heroes" />}
    </div>
  );
};

export default Dashboard;
