import React from 'react';

export const Score = () => {
  return (
    <div>
      <h1 style={{ fontSize: '5rem' }}>0</h1>
      <input type='text' value={'Home'} />
      <h1>Fouls: 0</h1>
      <h2>BONUS</h2>
      <div className='is-flex is-flex-direction-column'>
        <div className='is-flex'>
          <button className='button  is-small '> +1 </button>
          <button className='button  is-small'> +2 </button>
          <button className='button  is-small'> +3 </button>
        </div>
        <div>
          <button className='button  is-small'> -1 </button>
          <button className='button  is-small'> -2 </button>
          <button className='button  is-small'> -3 </button>
        </div>
      </div>
    </div>
  );
};
