import axios from "axios";
import { useEffect } from "react";

const BaseUrl="https://api.themoviedb.org/3"
const api_key="1cf42da2ba92010f7efcbb0fc0c14f29"

const movieByGenreBaseURL="https://api.themoviedb.org/3/discover/movie?api_key=1cf42da2ba92010f7efcbb0fc0c14f29";
//https://api.themoviedb.org/3/trending/all/day?api_key=1cf42da2ba92010f7efcbb0fc0c14f29

const getTrendingVideos=axios.get(`${BaseUrl}/trending/all/day?api_key=${api_key}`);
const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

    export default{
        getTrendingVideos,    
        getMovieByGenreId
}