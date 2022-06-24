import "./App.css";
import BlogPost from "./components/BlogPost";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchBlogPosts = async() => {
      try {
        console.log("fetching");
        const response = await axios.get('');
        console.log("received");
        setBlogPosts(response.data);
      } catch (err) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      }
    }
    fetchBlogPosts();
  }, [])

  
  return (
    <div className="App">
      {blogPosts.map((blogPost) => (
        <BlogPost title={blogPost.title} body={blogPost.body} />
      ))}
    </div>
  );
}

export default App;
