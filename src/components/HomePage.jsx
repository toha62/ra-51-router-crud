import PostsHeader from "./PostsHeader";
import PostCard from "./PostCard";
import useLoadData from "../hooks/useLoadData";

export default function HomePage() { 
  const [posts, loading, error] = useLoadData(import.meta.env.VITE_URL); 
  const postItems = posts && posts.map((post) => 
    <li key={post.id}>
      <PostCard post={post}/>
    </li>
  );
  console.log('render HomePage');
  return (
    <>
       <PostsHeader />
       {loading && <h5>Loading ...</h5>}
       {error && <h5>{error}</h5>}
       <ul>{postItems}</ul>      
    </>   
  );
}