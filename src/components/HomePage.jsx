import PostsHeader from "./PostsHeader";
import PostCard from "./PostCard";
import usePolling from "../hooks/usePolling";
import { Link } from "react-router-dom";

export default function HomePage() {  
  const [posts, loading, error] = usePolling(import.meta.env.VITE_URL, 1000, []);

  const postItems = posts && posts.map((post) => 
    <li key={post.id}>
      <Link to={`/${post.id}`}>
        <PostCard post={post}/>
      </Link>      
    </li>
  );
  
  return (
    <>
       <PostsHeader />       
       <ul>{postItems}</ul>      
    </>   
  );
}