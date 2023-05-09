import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import NewPost from "./components/NewPost";

export default function App() {
const posts = [
  {id: 0, content: "Пост относящийся к курсу РЕАКТ", created: "2023-05-07 13-01-05"},
  {id: 1, content: "Пост  к курсу Python", created: "2023-03-20 01-15-55"},
];

const handleSubmit = (postText) => {  

  console.log(postText);
};

  return (    
      <BrowserRouter>        
        <div className="page">
          <Routes>
            <Route path="/" element={<HomePage posts={posts} />} />            
            <Route path="/new" element={<NewPost  handleSubmit={handleSubmit} />} />            
          </Routes>
        </div>
      </BrowserRouter>    
  );
}