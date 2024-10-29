import React, { useContext } from 'react';
import { AppContext } from '../data/AppContext'; // Import context correctly

function FlexContainer({ element: Element }) {
  const { items } = useContext(AppContext); // Get items from context

  return (
    <div className="d-flex flex-wrap">
      {items.map(item => (
        <Element key={item.id} person={item} />
      ))}
    </div>
  );
}

export default FlexContainer;
