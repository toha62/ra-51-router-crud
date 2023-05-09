import PostsHeader from "./PostsHeader";
import PostCard from "./PostCard";

export default function HomePage({ posts=[] }) {
  const postItems = posts.map((post) => 
    <li key={post.id}>
      <PostCard post={post} />
    </li>
  );

  return (
    <>
       <PostsHeader />
       <ul>{postItems}</ul>      
    </>   
  );
}