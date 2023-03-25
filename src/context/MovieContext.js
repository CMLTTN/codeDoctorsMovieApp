import { async } from "@firebase/util";
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const MovieContext = createContext();

 const API_KEY = "04bca3d16f844d629fee07d11a97bf54";
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=`;

const MovieContextProvider = (prop) => {
  const [movie, setMovie] = useState();

  useEffect(() => {
    getMovie(FEATURED_API);
  }, []);
  const getMovie = async (api) => {
    try {
      const data = await axios.get(api);
      console.log(data);
    } catch (error) {}
  };
  return (
    <MovieContext.Provider value={{}}>{prop.children}</MovieContext.Provider>
  );
};

export default MovieContextProvider;

