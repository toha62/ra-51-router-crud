import { Link } from 'react-router-dom';

export default function NewPost() {
  return (
    <form>   
      <div className="form-group">
        <label htmlFor="postInput">Password</label>
        <textarea class="form-control" id="postInput" placeholder="Type your post" rows="5"></textarea>        
      </div>  
      <div className='d-flex justify-content-around'>
        <button type="submit" class="btn btn-primary btn-sm">Опубликовать</button>
        <Link to="/" className="btn btn-primary btn-sm">Отмена</Link>        
      </div>      
    </form>
  );
}
