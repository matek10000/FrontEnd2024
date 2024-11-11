import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import './UserDetails.css'; 

const UserDetails = () => {
  const { id } = useParams();
  const [user] = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`); //Pobranie danych z API

  if (!user) {
    return <div>Ładowanie danych użytkownika...</div>;
  }

  return (
    <div className="user-details-container"> {}
      <h2>Szczegóły użytkownika</h2>
      <p><strong>Imię:</strong> {user.name}</p>
      <p><strong>E-mail:</strong> {user.email}</p>
      <p><strong>Nazwa użytkownika:</strong> {user.username}</p>
    </div>
  );
};

export default UserDetails;
