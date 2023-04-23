import React, { useContext } from 'react';
import PostContext from '../components/PostContext';
import { Link } from 'react-router-dom';
import PostView from '../components/PostView';

export default function AllPosts({ history }) {
  const { posts, loading } = useContext(PostContext);

  return (
    <div className="home">
      <button className="new-post-btn">
        <Link to="/posts/new">{'Создать пост'}</Link>
      </button>
      <div className="body">
        {loading && <div>{'Loading...'}</div>}
        {posts.map((o) => (
          <PostView
            data={o}
            key={o.id}
            onClick={() => history.push(`/posts/${o.id}`)}
          />
        ))}
      </div>
    </div>
  );
}
