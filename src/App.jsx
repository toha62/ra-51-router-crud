import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "./components/HomePage";
import NewPost from "./components/NewPost";
import ViewCard from "./components/ViewCard";
import usePostData from "./hooks/usePostData";

export default function App() {
  const [newPost, setNewPost] = useState();   
  const [posting, errorPosting] = usePostData(import.meta.env.VITE_URL, newPost);
  
  const addNewPost = postText => setNewPost({content: postText, id: 0});

  return (    
      <BrowserRouter>        
        <div className="page">          
          <Routes>
            <Route path="/" element={<HomePage />} />            
            <Route path="/new" element={<NewPost handleSubmit={addNewPost} />} />            
            <Route path=":id" element={<ViewCard />} />            
          </Routes>
          {posting && <h5>Loading ...</h5>}          
          {errorPosting && <h5>{errorPosting}</h5>}
        </div>
      </BrowserRouter>    
  );
}