import BlogList from "./BlogList";
import useFetch from "./usefetch";
const user = {
  name: 'D|N',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

 function mybutton(){


}

const Home = () => {
  const {data: blogs,isPending,error} = useFetch("http://localhost:3000/blogs");
  

  return (

    <><div className="WelcomeTxt">
      
      <h2>Sit-back relax and enjoy the Ride</h2>
      
      </div>
      
      
      {/* <><h1>{user.name}</h1><img
      className="avatar"
      src={user.imageUrl}
      alt={'Photo of ' + user.name}
      style={{
        width: user.imageSize,
        height: user.imageSize
      }} /></>
      <div>
        {error && <div>{error}</div>}
        {isPending && <div>Loading....</div>}
        {blogs && <BlogList blogs={blogs} />}
      </div> */}
      <div>
        {error && <div>{error}</div>}
        {isPending && <div>Loading....</div>}
        {blogs && <BlogList blogs={blogs} />}
      </div>
      
      </>
  );

}


export default Home;