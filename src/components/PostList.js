import { Post } from './Post';

export const PostList = ({
  posts,
  handleDeletePost
}) => {
  return (
    <div className='w-50 m-auto'>
      {
        posts && posts.length > 0 &&
        posts.map(post => (
          <Post 
            post={post}
            handleDeletePost={handleDeletePost}
          />
        ))}
    </div>
  );
}