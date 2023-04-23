import React, { useState, useEffect } from 'react';
import PostContext from '../components/PostContext';

export default function PostProvider(props) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const update = () => {
    fetch(process.env.REACT_APP_BACKEND_URL)
      .then((response) => response.json())
      .then((posts) => {
        setPosts(posts);
        if (loading) setLoading(false);
      });
  };

  useEffect(update, []);

  const handlePush = ({ id = 0, content }) => {
    console.log({ id, created, content });
    fetch(process.env.REACT_APP_BACKEND_URL, {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      method: 'POST',
      body: JSON.stringify({ id, created, content }),
    }).then(update);
  };

  const handleRemove = (id) => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/${id}`, {
      method: 'DELETE',
    }).then(update);
  };

  return (
    <PostContext.Provider value={{ posts, loading, handlePush, handleRemove }}>
      {props.children}
    </PostContext.Provider>
  );
}
