import { Link, useParams } from "react-router-dom";
import { useState } from 'react';
import PostCard from "./PostCard";
import EditPost from "./EditPost";
import useLoadData from "../hooks/useLoadData";

export default function ViewCard({ handleDelete, handleEdit }) {
  const { id } = useParams();  
  const [isEdit, setEdit] = useState(false);
  const [data, loading, error] = useLoadData(import.meta.env.VITE_URL, id);
  
  if (!data) {
    return null;
  }
  const { post } = data;
  const handleSubmit = (post) => {
    console.log('end edit');
    setEdit(false);
    handleEdit(post);
  };
  
  return ( 
    <>
      {isEdit ? (
        <EditPost
          post={post}
          handleSubmit={handleSubmit}
        />        
      ) : (
        <PostCard post={post} >
          <div className='d-flex justify-content-around mt-2'>
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={() => setEdit(true)}
            >Редактировать</button>
            <Link
              to="/"
              className="btn btn-primary btn-sm"
              onClick={() => handleDelete(post.id)}
            >Удалить</Link>    
            <Link
              to="/"
              className="material-icons close-button"
            >clear</Link>          
          </div> 
        </PostCard>   
      )}
      {loading && <h5>Loading ...</h5>}
      {error && <h5>{error}</h5>}
    </>      
  );
}