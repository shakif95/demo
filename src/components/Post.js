export const Post = ({
  post,
  handleDeletePost
}) => {
  return (
    <div className='card my-3' key={post.id}>
      <div className='card-body'>
        <div className='text-right'>
          <button className='btn btn-sm btn-outline-danger px-3' onClick={() => handleDeletePost(post.id)}>x</button>
        </div>
        <h5 class="card-title">{post.title}</h5>
        <div className='card-text'>{post.body}</div>
      </div>
    </div>
  );
}