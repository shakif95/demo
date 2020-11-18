import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';


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
      <div className='w-50 m-auto'>
        {
          posts && posts.length > 0 &&
          posts.map(post => (
            <div className='card my-3' key={post.id}
            >
              <div className='card-body'>
                <div className='text-right'>
                  <button className='btn btn-sm btn-outline-danger px-3' onClick={() => handleDeletePost(post.id)}>x</button>
                </div>
                <h5 class="card-title">{post.title}</h5>
                <div className='card-text'>{post.body}</div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
