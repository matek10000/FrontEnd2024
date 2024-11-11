import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const PostComments = () => {
  const { id } = useParams();
  const [post] = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`); // Pobranie danych z API
  const [comments] = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);

  if (!post || !comments) {
    return <div>Ładowanie postu i komentarzy...</div>;
  }

  return (
    <div>
      <h2>Post: {post.title}</h2>
      <p>{post.body}</p>
      <h3>Komentarze:</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <p><strong>{comment.name}</strong> ({comment.email}): {comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostComments;
