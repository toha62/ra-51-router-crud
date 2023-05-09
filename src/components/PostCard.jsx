export default function PostCard({ post }) {
  return (
    <div className="card p-2 mt-2" style={{width: "18rem"}}>
      <img src="https://i.pravatar.cc/300" className="card-img-top" alt="..." style={{width: "8rem"}} /> 
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><b>Petrov Vasya</b></li>
        <li className="list-group-item">{post.content}</li>
        <li className="list-group-item">{post.created}</li>        
      </ul>
    </div>
  );
}