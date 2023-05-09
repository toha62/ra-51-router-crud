import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NewPost({ handleSubmit }) { 
  const [postText, setPostText] = useState('');
  
  return (
    <form
      onSubmit={(evt) => {
        evt.preventDefault();
        handleSubmit(postText)}
      }
    >   
      <div className="form-group">
        <label htmlFor="postInput">Password</label>
        <textarea
          class="form-control"
          id="postInput"
          placeholder="Type your post"
          rows="5"
          onChange={(e) => setPostText(e.target.value)}
          value={postText}
        >
          
        </textarea>        
      </div>  
      <div className='d-flex justify-content-around'>
        <button type="submit" class="btn btn-primary btn-sm">Опубликовать</button>
        <Link to="/" className="btn btn-primary btn-sm">Отмена</Link>        
      </div>      
    </form>
  );
}