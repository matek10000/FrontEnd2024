import React, { useState } from 'react';

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
          <button onClick={() => handleSortUser('asc')}> ⬆</button>
          <button onClick={() => handleSortUser('desc')}> ⬇</button>
          <button onClick={() => handleSortUser('default')} >🔄</button>
        </th>
        <th>
          Tytuł Postu
          <button onClick={() => handleSortTitle('asc')}> ⬆</button>
          <button onClick={() => handleSortTitle('desc')}> ⬇</button>
          <button onClick={() => handleSortTitle('default')} >🔄</button>
        </th>
        <th>
          Liczba Komentarzy
          <button onClick={() => handleSortComments('asc')}> ⬆</button>
          <button onClick={() => handleSortComments('desc')}> ⬇</button>
          <button onClick={() => handleSortComments('default')} >🔄</button>
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
