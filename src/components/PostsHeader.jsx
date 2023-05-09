import { Link } from 'react-router-dom';

export default function PostsHeader() {
  return (
    <div className="card align-items-end">      
      <div className="card-body ">        
        <Link to="/new" className="btn btn-primary btn-sm">Создать пост</Link>
      </div>
    </div>
  );
}
