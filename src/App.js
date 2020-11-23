import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { PostList } from './components/PostList';


export const App = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data.slice(0, 10)));
  }, []);

  const handleDeletePost = postId => {
    setPosts(posts.filter(x => x.id !== postId));
  }

  return (
    <div className='container-fluid'>
      <div className='text-center'>{posts.length} posts found!</div>
      <PostList 
        posts={posts}
        handleDeletePost={handleDeletePost}
      />
    </div>
  );
}

export default App;
