import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>FrontApp 2024</h1>
        <p className="description">
          Witaj na stronie projektu! Projekt składa się z kilku laboratoriów, w których
          implementuję różne funkcjonalności przy użyciu React. Poniżej znajduje się
          tabela z opisem każdego z laboratoriów, w tym celów i zadań, które wykonałem.
        </p>
      </header>

      <section className="labs-section">
        <h2>Podział na laboratoria</h2>
        <table className="labs-table">
          <thead>
            <tr>
              <th>Lab</th>
              <th>Opis</th>
              <th>Zakres działań</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Laboratorium 1</td>
              <td>Wprowadzenie do podstaw React</td>
              <td>Tworzenie prostych komponentów, zarządzanie stanem, i renderowanie elementów na stronie.</td>
            </tr>
            <tr>
              <td>Laboratorium 2</td>
              <td>Praca z ID</td>
              <td>Tworzenie podstrony, która ma za zadanie wyszukać obiekt po id.</td>
            </tr>
            <tr>
              <td>Laboratorium 3</td>
              <td>Lista obiektów z obsługiwaniem funkcji</td>
              <td>Praca z podstroną, wyświetlającą listę obiektów oraz przyciski obsługujące.</td>
            </tr>
            <tr>
              <td>Laboratorium 4</td>
              <td>Formularze</td>
              <td>Wykorzystanie formularzy, aby utworzyć funkcjonalność edycji i dodawania obiektów.</td>
            </tr>
            <tr>
              <td>Laboratorium 5</td>
              <td>Praca z API i tabelami</td>
              <td>Integracja z API, dynamiczne ładowanie danych i wyświetlanie ich w tabeli z możliwością sortowania.</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Home;
