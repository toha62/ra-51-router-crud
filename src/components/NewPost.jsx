import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function NewPost({ initialText = '', handleSubmit }) { 
  const [postText, setPostText] = useState(initialText);
  const navigate = useNavigate();
  
  return (
    <form
      className="card"
      onSubmit={(evt) => {
        evt.preventDefault();        
        handleSubmit(postText);
        navigate('/'); 
      }}
    >   
      <div className="form-group">
        <label className="mb-0 mt-1 ml-1" htmlFor="postInput"><h6>Новый пост</h6></label>
        <textarea
          className="form-control"
          id="postInput"
          placeholder="Type your post"
          rows="5"
          onChange={(e) => setPostText(e.target.value)}
          value={postText}
        >
          
        </textarea>        
      </div>  
      <div className='d-flex justify-content-around'>
        <button type="submit" className="btn btn-primary btn-sm mb-2">Опубликовать</button>
        <Link to="/" className="material-icons close-button">clear</Link>        
      </div>      
    </form>
  );
}
