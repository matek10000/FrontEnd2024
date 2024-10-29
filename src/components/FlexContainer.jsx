import React, { useContext } from 'react';
import { AppContext } from '../data/AppContext';

function FlexContainer({ element: Element }) {
  const { items } = useContext(AppContext);

  return (
    <div className="d-flex flex-wrap">
      {items.map(item => (
        <Element key={item.id} person={item} />
      ))}
    </div>
  );
}

export default FlexContainer;
