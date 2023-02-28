import BlogList from "./BlogList";
import useFetch from "./usefetch";
import { bounce } from 'react-animations';
import styled from "styled-components";

import { keyframes } from "@emotion/react";


// const user = {
//   name: 'D|N',
//   imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
//   imageSize: 90,

const Bounce = styled.div`animation:  2s ${keyframes`${bounce}`} infinite;`;

const Home = () => {
  const {data: blogs,isPending,error} = useFetch("http://localhost:3000/blogs");
  

  return (

    <><bounce><div className="WelcomeTxt">
      
      <h2>Sit-back relax and enjoy the Ride</h2>
     
     
      
      </div>
      </bounce>
      
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