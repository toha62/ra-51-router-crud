import { Link, useParams } from "react-router-dom";
import PostCard from "./PostCard";
import useLoadData from "../hooks/useLoadData";

export default function ViewCard({ handleDelete }) {
  const { id } = useParams();
  const [data, loading, error] = useLoadData(import.meta.env.VITE_URL, id);
  const handleClose = () => {};
  if (!data) {
    return null;
  }
  const { post } = data;
  console.log(post);
  return ( 
    <PostCard post={post} >
      <div className='d-flex justify-content-around mt-2'>
        <button type="button" className="btn btn-primary btn-sm">Редактировать</button>
        <Link to="/" className="btn btn-primary btn-sm" onClick={() => handleDelete(post.id)} >Удалить</Link>    
        <Link to="/" className="material-icons close-button">clear</Link>          
      </div> 
    </PostCard>     
  );
}