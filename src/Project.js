import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


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

    
    
   

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 240 }}
        image="https://th.bing.com/th/id/OIP.cevhDxOTXgO6M8gMsM-1aAHaIb?pid=ImgDet&rs=1"
        title="Flutter Logo"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Flutter
        </Typography>
       
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        
      </CardContent>
     
    </Card>




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