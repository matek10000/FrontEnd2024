import React, { useState } from 'react';
import './TableHeader.css';  // Importujemy plik CSS

const TableHeader = ({ onSortUser, onSortTitle, onSortComments }) => {
  const [sortOrderUser, setSortOrderUser] = useState('default');
  const [sortOrderTitle, setSortOrderTitle] = useState('default');
  const [sortOrderComments, setSortOrderComments] = useState('default');

  const handleSortUser = (order) => {
    setSortOrderUser(order);
    onSortUser(order);
  };

  const handleSortTitle = (order) => {
    setSortOrderTitle(order);
    onSortTitle(order);
  };

  const handleSortComments = (order) => {
    setSortOrderComments(order);
    onSortComments(order);
  };

  return (
    <thead>
      <tr>
        <th>
          Użytkownik
          <div className="dropdown">
            <button className="dropdown-button">
              {sortOrderUser === 'default' ? 'Sortowanie' : sortOrderUser === 'asc' ? 'Rosnąco' : 'Malejąco'}
            </button>
            <div className="dropdown-content">
              <button onClick={() => handleSortUser('asc')}>Rosnąco</button>
              <button onClick={() => handleSortUser('desc')}>Malejąco</button>
              <button onClick={() => handleSortUser('default')}>Resetuj</button>
            </div>
          </div>
        </th>
        <th>
          Tytuł Postu
          <div className="dropdown">
            <button className="dropdown-button">
              {sortOrderTitle === 'default' ? 'Sortowanie' : sortOrderTitle === 'asc' ? 'Rosnąco' : 'Malejąco'}
            </button>
            <div className="dropdown-content">
              <button onClick={() => handleSortTitle('asc')}>Rosnąco</button>
              <button onClick={() => handleSortTitle('desc')}>Malejąco</button>
              <button onClick={() => handleSortTitle('default')}>Resetuj</button>
            </div>
          </div>
        </th>
        <th>
          Liczba Komentarzy
          <div className="dropdown">
            <button className="dropdown-button">
              {sortOrderComments === 'default' ? 'Sortowanie' : sortOrderComments === 'asc' ? 'Rosnąco' : 'Malejąco'}
            </button>
            <div className="dropdown-content">
              <button onClick={() => handleSortComments('asc')}>Rosnąco</button>
              <button onClick={() => handleSortComments('desc')}>Malejąco</button>
              <button onClick={() => handleSortComments('default')}>Resetuj</button>
            </div>
          </div>
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
