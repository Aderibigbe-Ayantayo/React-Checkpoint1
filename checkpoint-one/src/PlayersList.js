import React from 'react';
import Player from './Player';
import players from './players';

const PlayersList = () => {
  return (
    <div className='row'>
      {players.map(player => (
        <Player key={player.name} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;