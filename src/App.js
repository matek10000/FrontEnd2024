import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Lab1 from './pages/Lab1';
import Lab2 from './pages/Lab2';
import Lab3 from './pages/Lab3';
import Lab4Add from './pages/Lab4Add';
import Lab4Edit from './pages/Lab4Edit';
import NotFound from './pages/NotFound';
import Lab5Page from './pages/Lab5Page';
import UserDetails from './components/UserDetails';
import PostComments from './components/PostComments';
import AppProvider from './data/AppContext';

// Obsługa paska menu głównego
const menuItems = [
    { id: 1, label: "Home", url: "/", urlPattern: "/", element: <Home /> },
    { id: 2, label: "Laboratorium 1", url: "/lab1", urlPattern: "/lab1", element: <Lab1 /> },
    { id: 3, label: "Laboratorium 2", url: "/lab2/:id", urlPattern: "/lab2/:id", element: <Lab2 /> },
    { id: 4, label: "Laboratorium 3", url: "/lab3", urlPattern: "/lab3", element: <Lab3 /> },
    { id: 5, label: "Dodaj Obiekt", url: "/lab4/add", urlPattern: "/lab4/add", element: <Lab4Add /> },
    { id: 6, label: "Edytuj Obiekt", url: "/lab4/edit/:id", urlPattern: "/lab4/edit/:id", element: <Lab4Edit /> },
    { id: 7, label: "Laboratorium 5", url: "/lab5", urlPattern: "/lab5", element: <Lab5Page /> },
];

// m.in. Obsługa przenoszenia w lab5 do elementów w API
function App() {
    return (
        <AppProvider>
            <RootLayout items={menuItems}>
                <Routes>
                    {menuItems.map(item => (
                        <Route key={item.id} path={item.urlPattern} element={item.element} />
                    ))}
                    <Route path="/lab5/users/:id" element={<UserDetails />} />
                    <Route path="/lab5/posts/:id/comments" element={<PostComments />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </RootLayout>
        </AppProvider>
    );
}

export default App;
