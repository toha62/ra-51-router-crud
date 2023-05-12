import { Link, useParams } from "react-router-dom";
import PostCard from "./PostCard";
import useLoadData from "../hooks/useLoadData";

export default function ViewCard() {
  const { id } = useParams();
  const [data, loading, error] = useLoadData(import.meta.env.VITE_URL, id);
  
  if (!data) {
    return null;
  }
  const { post } = data;
  console.log(post);
  return ( 
    <PostCard post={post} >
      <div className='d-flex justify-content-around mt-2'>
        <button type="button" className="btn btn-primary btn-sm">Редактировать</button>
        <Link to="/" className="btn btn-primary btn-sm">Отмена</Link>        
      </div> 
    </PostCard>     
  );
}