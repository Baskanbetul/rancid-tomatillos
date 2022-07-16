//make 2 functions, one of them contains 1st fetch ,
//other contains other 2 fetches
//maybe one function
import React from "react";

const fetchMovies = (param) => {

 return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies${param}`)
			.then((response) => response.json())
}

export default fetchMovies;
