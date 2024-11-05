import React, { useState } from 'react';

const TableHeader = ({ onSort }) => {
  const [sortOrder, setSortOrder] = useState('default');

  const handleSort = (order) => {
    setSortOrder(order);
    onSort(order);
  };

  return (
    <thead>
      <tr>
        <th>Użytkownik</th>
        <th>Tytuł Postu
            <button onClick={() => handleSort('asc')}>⬆</button>
            <button onClick={() => handleSort('desc')}>⬇</button>
            <button onClick={() => handleSort('default')}>🔄</button>
        </th>
        <th>Liczba Komentarzy</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
