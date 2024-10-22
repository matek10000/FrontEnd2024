import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import RootLayout from './layouts/RootLayout'; 
import Home from './pages/Home'; 
import Lab1 from './pages/Lab1';
import Lab2 from './pages/Lab2';
import Lab3 from './pages/Lab3';
import NotFound from './pages/NotFound';
import { data } from './module-data.js'; 
import PersonProfile from './components/PersonProfile'; 

const menuItems = [
  { id: 1, label: "Home", url: "/", urlPattern: "/", element: <Home /> },
  { id: 2, label: "Laboratorium 1", url: "/lab1", urlPattern: "/lab1", 
    element: (
      <div>
        <h1>Laboratorium 1</h1>
        {data.map(person => (
          <PersonProfile key={person.id} person={person} />
        ))}
      </div>
    ) 
  },
  { id: 3, label: "Laboratorium 2", url: "/lab2/:id", urlPattern: "/lab2/:id", element: <Lab2 /> },
  { id: 4, label: "Laboratorium 3", url: "/lab3", urlPattern: "/lab3", element: <Lab3 /> }
];

function App() {
  return (
    <RootLayout items={menuItems}>
      <Routes>
        {menuItems.map(item => (
          <Route key={item.id} path={item.urlPattern} element={item.element} />
        ))}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </RootLayout>
  );
}

export default App;
