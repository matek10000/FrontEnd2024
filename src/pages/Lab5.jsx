import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';
import TableHeader from '../components/TableHeader';

const Lab5Page = () => {
  const [posts] = useFetch("https://jsonplaceholder.typicode.com/posts");
  const [users] = useFetch("https://jsonplaceholder.typicode.com/users");
  const [comments] = useFetch("https://jsonplaceholder.typicode.com/comments");
  const [sortOrder, setSortOrder] = useState('default');

  if (!posts || !users || !comments) {
    return <div>Ładowanie danych...</div>;
  }

  const tableData = posts.map((p) => ({
    user: users.find((u) => u.id === p.userId) || {},
    post: p,
    comments: comments.filter((c) => c.postId === p.id),
  }));

  const sortedData = () => {
    switch (sortOrder) {
      case 'asc':
        return [...tableData].sort((a, b) => a.post.title.localeCompare(b.post.title));
      case 'desc':
        return [...tableData].sort((a, b) => b.post.title.localeCompare(a.post.title));
      default:
        return tableData;
    }
  };

  const handleSort = (order) => {
    setSortOrder(order);
  };

  return (
    <div>
      <h1>Lab 5</h1>
      <table>
        <TableHeader onSort={handleSort} />
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
