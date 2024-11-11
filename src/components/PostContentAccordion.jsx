import React, { useState } from 'react';

const PostContentAccordion = ({ title, body }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleAccordion}>
        {title} {isOpen ? '▲' : '▼'}
      </button>
      {isOpen && <p>{body}</p>}
    </div>
  );
};

export default PostContentAccordion;
