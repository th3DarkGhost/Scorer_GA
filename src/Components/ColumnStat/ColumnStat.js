import React from 'react';
import { Score } from '../Score/Score';

export const ColumnStat = () => {
  return (
    <div>
      {<Score />}
      <table className='table'>
        <thead>
          <tr>
            <th>Number</th>
            <th>Player</th>
            <th>Points</th>
            <th>Fouls</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>11</td>
            <td>Stewar</td>
            <td>25</td>
            <td>4</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
