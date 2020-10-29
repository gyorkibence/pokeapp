import React, { FC } from 'react';
import './card.scss';

type CardProps = {
  name: string,
  preview: string,
  weight: number,
  height: number,
  abilities: string,
  selected: boolean,
};

const Card: FC<CardProps> = ({ name, preview, weight, height, abilities, selected }) => (
  <div className={`card-container${selected ? ' selected' : ''}`}>
    <div className="card-title">{name}</div>
    <img src={preview} className="pokemon-preview" alt="pokemon-preview" />
    <div className="card-subtitle">{`Weight: ${weight}`}</div>
    <div className="card-subtitle">{`Height: ${height}`}</div>
    <div className="card-subtitle">{`Not hidden abilities: ${abilities}`}</div>
  </div>
);

export default Card;
