export default function PostCard({ post }) {
  const prettyDate = (rawTime) => {
    const currentTime = Date.now();
    const pastTime = (currentTime - rawTime) / 60000;

    if (pastTime < 60) {
      return `${Math.floor(pastTime)} минут назад`;
    }
    if (pastTime < 1440) {
      return `${Math.floor(pastTime / 60)} часов назад`;
    }
    return obj.post.created = `${Math.floor(pastTime / 1440)} дней назад`;
  };

  return (
    <div className="card p-2 mt-2" style={{width: "18rem"}}>
      <img src={"https://i.pravatar.cc/300/" + post.id} className="card-img-top" alt="..." style={{width: "8rem"}} /> 
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><h5>Petrov Vasya</h5></li>
        <li className="list-group-item">{post.content}</li>
        <li className="list-group-item">{prettyDate(post.created)}</li>        
      </ul>
    </div>
  );
}