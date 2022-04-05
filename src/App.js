import React from 'react';
import { ColumnStat } from './Components/ColumnStat/ColumnStat';

export const App = () => {
  return (
    <div>
      <div className='is-flex is-flex-direction-column is-align-items-center is-justify-content-center '>
        <h1 style={{ fontSize: '5rem' }}>10:00 | 24</h1>
        <h3 style={{ fontSize: '3.5rem' }}>Qtr - 1</h3>
      </div>
      <div className='columns'>
        <div className='column'>{<ColumnStat />}</div>
        <div className='column'>{<ColumnStat />}</div>
      </div>
    </div>
  );
};
