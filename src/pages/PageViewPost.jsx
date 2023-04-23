import React, { useState, useContext, useEffect } from 'react';
import PostsContext from '../components/PostsContext';
import PostView from '../components/PostView';
import Page404 from '../pages/Page404';

export default function PageViewPost({ match, history }) {
  const { posts, handleRemove } = useContext(PostsContext);
  const { id } = match.params;

  const [post, setPost] = useState();

  useEffect(() => {
    if (posts) setPost(posts.find((o) => String(o.id) === id));
    return () => {};
  }, [posts, id]);

  const handleClose = () => {
    handleRemove(id);
    history.push('/');
  };

  return (
    (post && <PostView data={post} onClose={handleClose} />) || <Page404 />
  );
}
