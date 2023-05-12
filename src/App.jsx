import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "./components/HomePage";
import NewPost from "./components/NewPost";
import useLoadData from "./hooks/useLoadData";
import usePostData from "./hooks/usePostData";

export default function App() {
  const [data, setData] = useState();  
  const [posts, loading, error] = useLoadData(import.meta.env.VITE_URL);
  const [posting, errorPosting] = usePostData(import.meta.env.VITE_URL, data);
  
  const addNewPost = (postText) => {    
    const postData = {
      content: postText,
    }; 
    setData(postData);     
  };

  return (    
      <BrowserRouter>        
        <div className="page">
          {(loading || posting) && <h5>Loading ...</h5>}
          {error && <h5>{error}</h5>}
          {errorPosting && <h5>{errorPosting}</h5>}
          <Routes>
            <Route path="/" element={<HomePage posts={posts} />} />            
            <Route path="/new" element={<NewPost  handleSubmit={addNewPost} />} />            
          </Routes>
        </div>
      </BrowserRouter>    
  );
}