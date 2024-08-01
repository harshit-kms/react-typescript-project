import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from './types';

interface HeroListProps {
  heroes: Hero[];
  title: string;
}

const HeroList: React.FC<HeroListProps> = ({ heroes, title }) => {
  return (
    <div className="hero-list">
      <h1>{title}</h1>
      {heroes.map((hero) => (
        <div className="hero-preview" key={hero.id}>
          <Link to={`/heroes/${hero.id}`}>
            <h2>{hero.title}</h2>
            <p>Universe: {hero.universe}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default HeroList;
