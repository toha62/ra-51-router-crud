import PostsHeader from "./PostsHeader";
import PostCard from "./PostCard";
import { Link } from "react-router-dom";

export default function HomePage({ posts }) {  
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