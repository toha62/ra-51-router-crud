import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';

export default function EditPost({ post, handleSubmit }) {
  const [postText, setPostText] = useState(post.content);
  const navigate = useNavigate();
   
  return (
    <form
      className="card"
      onSubmit={(evt) => {
        evt.preventDefault();        
        handleSubmit({id: post.id, content: postText});
        navigate('/'); 
      }}
    >   
      <div className="form-group">
        <img src={"https://i.pravatar.cc/300/" + post.id} className="card-img-top" alt="..." style={{width: "8rem"}} /> 
        <label className="mb-0 mt-1 ml-1" htmlFor="postInput"><h6>Редактировать пост</h6></label>
        <textarea
          className="form-control"
          id="postInput"
          placeholder="Type your post"
          rows="5"
          onChange={(e) => setPostText(e.target.value)}
          value={postText}
        ></textarea>        
      </div>  
      <div className='d-flex justify-content-around'>
        <button type="submit" className="btn btn-primary btn-sm mb-2">Сохранить</button>
        <Link to="/" className="material-icons close-button">clear</Link>        
      </div>      
    </form>
  );
}