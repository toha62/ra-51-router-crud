import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "./components/HomePage";
import NewPost from "./components/NewPost";
import usePolling from "./hooks/usePolling";
import usePostData from "./hooks/usePostData";

export default function App() {
  const [newPost, setNewPost] = useState();  
  const [posts, loading, error] = usePolling(import.meta.env.VITE_URL, 1000, []);
  const [posting, errorPosting] = usePostData(import.meta.env.VITE_URL, newPost);
  
  const addNewPost = (postText) => {    
    const postData = {
      content: postText,
    }; 
    setNewPost(postData);     
  };

  return (    
      <BrowserRouter>        
        <div className="page">          
          <Routes>
            <Route path="/" element={<HomePage posts={posts} />} />            
            <Route path="/new" element={<NewPost  handleSubmit={addNewPost} />} />            
          </Routes>
          {(loading || posting) && <h5>Loading ...</h5>}
          {error && <h5>{error}</h5>}
          {errorPosting && <h5>{errorPosting}</h5>}
        </div>
      </BrowserRouter>    
  );
}