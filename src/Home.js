

import BlogList from "./BlogList";
import useFetch from "./usefetch";

const Home = () => {
  const {data: blogs,isPending,error} = useFetch("http://localhost:3000/blogs");
  

  return (
    <div className="container-div">
      {error&& <div>{error}</div>}
      {isPending && <div>Loading....</div>}
      {blogs && <BlogList blogs={blogs} title="ALL Blogs!" />}
    </div>
  );

}


export default Home;