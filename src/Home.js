import { useState,useEffect } from "react";

import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error,setError]=useState(null);
  // const handleDelete =(id)=>{
  //   const newBlogs =blogs.filter(blog =>blog.id !==id);
  //   setBlogs(newBlogs);
  // }

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:3000/blogs')
        .then((res) => {
          if(!res.ok){
            throw Error("Could Not fetch")
          }
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsPending(false);
        }).catch(err=> { 
          setIsPending(false);
          setError(err.message);
    });},

   []);

  return (
    <div className="container-div">
      {error&& <div>could not fetch data </div>}
      {isPending && <div>Loading....</div>}
      {blogs && <BlogList blogs={blogs} title="ALL Blogs!" />}
    </div>
  );
});
}
export default Home;