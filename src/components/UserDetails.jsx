import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const UserDetails = () => {
  const { id } = useParams();
  const [user] = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`); //Pobranie danych z API

  if (!user) {
    return <div>Ładowanie danych użytkownika...</div>;
  }

  return (
    <div>
      <h2>Szczegóły użytkownika</h2>
      <p><strong>Imię:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Username:</strong> {user.username}</p>
    </div>
  );
};

export default UserDetails;
