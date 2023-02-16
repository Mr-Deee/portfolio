
import './index.css';
import BlogList from "./BlogList";
import useFetch from "./usefetch";

const Home = () => {
  const {data: blogs,isPending,error} = useFetch("http://localhost:3000/blogs");
  

  return (
    <div className="home">
      {error&& <div>{error}</div>}
      {isPending && <div>Loading....</div>}
      <div className=" blogList"> {blogs && <BlogList blogs={blogs} title="Vitae!" />}
    </div></div>
  );

}


export default Home;