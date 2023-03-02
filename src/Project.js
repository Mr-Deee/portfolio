import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';



// function Profile() {
//     return (
//       <img
//         src="https://i.imgur.com/MK3eW3As.jpg"
//         alt="Katherine Johnson"
//       />
//     );
//   }

export default function MediaCard() {
  return (

    
    <div class='row'>

      <div>
        
      </div>






      
      {/* Languages Pane */}
   

    <div class="column"><Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 240 }}
        image="https://th.bing.com/th/id/OIP.cevhDxOTXgO6M8gMsM-1aAHaIb?pid=ImgDet&rs=1"
        title="Flutter Logo"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Flutter
        </Typography>
       
  
        
      </CardContent>
     
    </Card></div>


  {/* React */}

  <div class="column"> <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 240 }}
        image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fionicframework.com%2Fdocs%2Freact&psig=AOvVaw1R-tEU3gcjmqN8_23N_7oU&ust=1677662694097000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJDAytnyt_0CFQAAAAAdAAAAABAR"
        title="React Logo"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          React
        </Typography>
       
        
        
      </CardContent>
     
    </Card></div>

    </div>

  );





  
}




//     return (

//         <><section>
//             <Profile/>
//             <Profile/>
//             <Profile/>
//             <Profile/>



//         </section><button></button></>




        



       

// );


// export default Projects;