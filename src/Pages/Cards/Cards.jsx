import React,{useEffect} from 'react';
import axios from "axios";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

// import {useGetMoviesQuery} from '../../services/MoviesApi';
import { Link } from 'react-router-dom';
const Cards = ({}) => {

useEffect(() => {
 

  const options = {
    method: 'GET',
    url: 'https://ott-details.p.rapidapi.com/advancedsearch',
    params: {
      start_year: '1970',
      end_year: '2020',
      min_imdb: '6',
      max_imdb: '7.8',
      genre: 'action',
      language: 'english',
      type: 'movie',
      sort: 'latest',
      page: '1'
    },
    headers: {
      'X-RapidAPI-Host': 'ott-details.p.rapidapi.com',
      'X-RapidAPI-Key': 'b0a300d222msh4a959150243bd45p1907a5jsn9a490ea63316'
    }
  };
  
  axios.request(options)
  .then(function (response) {
    console.log(response.data,"lll");
  }).catch(function (error) {
    console.error(error.message);
  });
  
}, [])




  // const {data ,isFetching } = useGetMoviesQuery();
  // console.log(data);
  // const [movies ,setMovies] = useState(data?.results) ;
  // if (isFetching) return 'Loading...'
  return (
//     <Card sx={{ maxWidth: 345 }}>


//       {movies?.map((movie) => (

//         <Link to="/">
//         <CardActionArea>
//       <CardMedia
//         component="img"
//         height="140"
//         image={movie.imageurl}
//         alt="movie.imageurl"
//         />
        
//       <CardContent>
//         <Typography gutterBottom variant="h6" component="div">
//           {movie.title}
//         </Typography>
        
//       </CardContent>
//     </CardActionArea>
//     <CardActions>
//       <Button size="small" variant='text'>
//       <AddIcon/>Add to Watchlist 
//       </Button>
//     </CardActions>
//         </Link>

// ))}

//   </Card>
  // )

  <div>
    {}
  </div>
)}

export default Cards