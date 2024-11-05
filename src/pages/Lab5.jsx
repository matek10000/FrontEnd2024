import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';
import TableHeader from '../components/TableHeader';

const Lab5Page = () => {
  const [posts] = useFetch("https://jsonplaceholder.typicode.com/posts");
  const [users] = useFetch("https://jsonplaceholder.typicode.com/users");
  const [comments] = useFetch("https://jsonplaceholder.typicode.com/comments");
  const [sortOrderUser, setSortOrderUser] = useState('default');
  const [sortOrderTitle, setSortOrderTitle] = useState('default');
  const [sortOrderComments, setSortOrderComments] = useState('default');

  if (!posts || !users || !comments) {
    return <div>Ładowanie danych...</div>;
  }

  const tableData = posts.map((p) => ({
    user: users.find((u) => u.id === p.userId) || {},
    post: p,
    comments: comments.filter((c) => c.postId === p.id),
  }));

  const sortedData = () => {
    let sorted = [...tableData];
    
    // Sortowanie po nazwie użytkownika
    if (sortOrderUser === 'asc') {
      sorted.sort((a, b) => a.user.name.localeCompare(b.user.name));
    } else if (sortOrderUser === 'desc') {
      sorted.sort((a, b) => b.user.name.localeCompare(a.user.name));
    }

    // Sortowanie po tytule postu
    if (sortOrderTitle === 'asc') {
      sorted.sort((a, b) => a.post.title.localeCompare(b.post.title));
    } else if (sortOrderTitle === 'desc') {
      sorted.sort((a, b) => b.post.title.localeCompare(a.post.title));
    }

    // Sortowanie po liczbie komentarzy
    if (sortOrderComments === 'asc') {
      sorted.sort((a, b) => a.comments.length - b.comments.length);
    } else if (sortOrderComments === 'desc') {
      sorted.sort((a, b) => b.comments.length - a.comments.length);
    }

    return sorted;
  };

  const handleSortUser = (order) => {
    setSortOrderUser(order);
  };

  const handleSortTitle = (order) => {
    setSortOrderTitle(order);
  };

  const handleSortComments = (order) => {
    setSortOrderComments(order);
  };

  return (
    <div>
      <h1>Laboratorium 5</h1>
      <table>
        <TableHeader 
          onSortUser={handleSortUser} 
          onSortTitle={handleSortTitle} 
          onSortComments={handleSortComments} 
        />
        <tbody>
          {sortedData().map((data, index) => (
            <tr key={index}>
              <td>{data.user.name || 'Unknown'}</td>
              <td>{data.post.title}</td>
              <td>{data.comments.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Lab5Page;
